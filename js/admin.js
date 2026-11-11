let draftDb = JSON.parse(JSON.stringify(db));
let currentEditCat = null;

function checkAdminAuth() {
    const pass = document.getElementById('admin-pass').value.trim();
    if (pass === 'admin123') {
        localStorage.setItem('guid_admin_logged', 'true');
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('admin-main-container').style.display = 'block';
        loadAdminData();
    } else {
        alert('❌ Nesprávné heslo!');
    }
}

function logoutAdmin() {
    localStorage.removeItem('guid_admin_logged');
    location.href = 'index.html';
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('guid_admin_logged') === 'true') {
        const overlay = document.getElementById('auth-overlay');
        const main = document.getElementById('admin-main-container');
        if(overlay) overlay.style.display = 'none';
        if(main) main.style.display = 'block';
        loadAdminData();
    }
});

function loadAdminData() {
    const grid = document.getElementById('admin-grid');
    if (!grid) return;

    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');

    grid.innerHTML = Object.keys(draftDb).map(key => {
        const cat = draftDb[key];
        const views = stats[key] || 0;
        const style = cat.span ? 'grid-column: span 2; aspect-ratio: auto; padding: 16px;' : '';
        const hlClass = cat.highlight ? 'highlight' : '';
        const lockIcon = cat.isSecure ? '<div style="position:absolute; top:8px; right:8px; font-size:0.75rem; color:#EF4444;"><i class="fa-solid fa-lock"></i></div>' : '';

        return `
            <div class="grid-item ${hlClass}" style="${style}" onclick="openAdminEditModal('${key}')">
                ${lockIcon}
                <div style="position:absolute; top:8px; left:8px; font-size:0.75rem; color:#EF4444; padding:4px; cursor:pointer;" title="Smazat dlaždici" onclick="event.stopPropagation(); deleteCategory('${key}')"><i class="fa-solid fa-trash"></i></div>
                <div style="position:absolute; top:28px; right:8px; font-size:0.65rem; color:var(--text-muted);">👁️ ${views}</div>
                <div class="icon"><i class="fa-solid ${cat.icon || 'fa-folder'}"></i></div>
                <h3>${cat.title}</h3>
                <p>Upravit obsah</p>
            </div>
        `;
    }).join('');

    loadReports();
}

function openAdminEditModal(catKey) {
    currentEditCat = catKey;
    const cat = draftDb[catKey];
    if (!cat) return;

    document.getElementById('edit-modal-title').innerText = 'Úprava: ' + cat.title;
    renderEditForm();
    document.getElementById('edit-modal').style.display = 'block';
}

function renderEditForm() {
    const cat = draftDb[currentEditCat];
    const body = document.getElementById('edit-modal-body');

    let html = `
        <div class="guide-step" style="margin-bottom:15px;">
            <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">NÁZEV DLAŽDICE:</label>
            <input type="text" class="input-field" id="cat-title-input" value="${cat.title}" oninput="updateCatMeta('${currentEditCat}')" style="margin-top:0;">
            
            <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin:10px 0 4px 0;">IKONA (FontAwesome třída, např. fa-car):</label>
            <input type="text" class="input-field" id="cat-icon-input" value="${cat.icon || 'fa-folder'}" oninput="updateCatIcon('${currentEditCat}')" style="margin-top:0;">
        </div>
    `;

    cat.topics.forEach((top, tIdx) => {
        html += `
            <div class="guide-step" style="border-left: 4px solid var(--brand-green); margin-bottom: 16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; gap:8px;">
                    <div style="flex-grow:1;">
                        <label style="font-size:0.7rem; color:var(--text-muted);">Název téma:</label>
                        <input type="text" class="input-field" style="font-weight:700; margin-top:2px;" id="topic-name-${tIdx}" value="${top.name}" oninput="updateTopicName(${tIdx})">
                    </div>
                    <button class="btn-top-action" style="background:#FEE2E2; color:#EF4444; border-color:#FEE2E2; margin-top:16px;" onclick="removeTopic(${tIdx})"><i class="fa-solid fa-trash"></i> Smazat téma</button>
                </div>
        `;

        if (top.steps) {
            top.steps.forEach((step, sIdx) => {
                html += `
                    <div style="background:#FFFFFF; padding:12px; border-radius:10px; border:1px solid var(--border-color); margin-top:10px;">
                        <label style="font-size:0.75rem; color:var(--text-muted);">Nadpis kroku:</label>
                        <input type="text" class="input-field" id="t-${currentEditCat}-${tIdx}-${sIdx}" value="${step.title}">
                        
                        <label style="font-size:0.75rem; color:var(--text-muted); margin-top:8px; display:block;">Text návodu (podporuje **tučně**, HTML tagy jako &lt;div class='alert-box'&gt; pro výstrahy):</label>
                        <textarea class="admin-textarea" id="x-${currentEditCat}-${tIdx}-${sIdx}">${step.text}</textarea>

                        <label style="font-size:0.75rem; color:var(--text-muted); margin-top:8px; display:block;">Obrázky / Fotky (URL odkaz oddělené čárkou):</label>
                        <input type="text" class="input-field" id="img-${currentEditCat}-${tIdx}-${sIdx}" value="${(step.images || []).join(', ')}" placeholder="https://priklad.cz/foto.jpg">

                        <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                            <button class="btn-top-action" style="background:#FEE2E2; color:#EF4444; border-color:#FEE2E2; font-size:0.7rem;" onclick="removeStep(${tIdx}, ${sIdx})"><i class="fa-solid fa-trash"></i> Smazat krok</button>
                        </div>
                    </div>
                `;
            });
        }

        html += `
                <button class="btn-confirm" style="font-size:0.78rem; padding:8px; margin-top:12px; background:#F1F5F9; color:var(--text-main); box-shadow:none; border:1px solid var(--border-color);" onclick="addStep(${tIdx})"><i class="fa-solid fa-plus"></i> Přidat krok k tomuto tématu</button>
            </div>
        `;
    });

    html += `
        <button class="btn-confirm" style="font-size:0.85rem; padding:10px; margin-top:10px; background:var(--accent-blue);" onclick="addTopic()"><i class="fa-solid fa-folder-plus"></i> Přidat nové téma do této dlaždice</button>
    `;

    body.innerHTML = html;
}

function updateCatMeta(catKey) {
    const val = document.getElementById('cat-title-input').value;
    if (draftDb[catKey]) draftDb[catKey].title = val;
}

function updateCatIcon(catKey) {
    const val = document.getElementById('cat-icon-input').value;
    if (draftDb[catKey]) draftDb[catKey].icon = val;
}

function updateTopicName(tIdx) {
    const val = document.getElementById(`topic-name-${tIdx}`).value;
    if (draftDb[currentEditCat] && draftDb[currentEditCat].topics[tIdx]) {
        draftDb[currentEditCat].topics[tIdx].name = val;
    }
}

function addStep(tIdx) {
    saveCurrentModalInputs();
    if (draftDb[currentEditCat] && draftDb[currentEditCat].topics[tIdx]) {
        if (!draftDb[currentEditCat].topics[tIdx].steps) draftDb[currentEditCat].topics[tIdx].steps = [];
        draftDb[currentEditCat].topics[tIdx].steps.push({ title: "Nový krok", text: "Zde zadejte text...", images: [] });
        renderEditForm();
    }
}

function removeStep(tIdx, sIdx) {
    saveCurrentModalInputs();
    if (draftDb[currentEditCat] && draftDb[currentEditCat].topics[tIdx] && draftDb[currentEditCat].topics[tIdx].steps) {
        draftDb[currentEditCat].topics[tIdx].steps.splice(sIdx, 1);
        renderEditForm();
    }
}

function addTopic() {
    saveCurrentModalInputs();
    if (draftDb[currentEditCat]) {
        if (!draftDb[currentEditCat].topics) draftDb[currentEditCat].topics = [];
        draftDb[currentEditCat].topics.push({ name: "Nové téma", steps: [{ title: "Krok 1", text: "Zde zadejte text...", images: [] }] });
        renderEditForm();
    }
}

function removeTopic(tIdx) {
    saveCurrentModalInputs();
    if (draftDb[currentEditCat] && draftDb[currentEditCat].topics) {
        draftDb[currentEditCat].topics.splice(tIdx, 1);
        renderEditForm();
    }
}

function saveCurrentModalInputs() {
    if (!currentEditCat || !draftDb[currentEditCat]) return;
    const cat = draftDb[currentEditCat];
    cat.topics.forEach((top, tIdx) => {
        const nameEl = document.getElementById(`topic-name-${tIdx}`);
        if (nameEl) top.name = nameEl.value;
        if (top.steps) {
            top.steps.forEach((step, sIdx) => {
                const tEl = document.getElementById(`t-${currentEditCat}-${tIdx}-${sIdx}`);
                const xEl = document.getElementById(`x-${currentEditCat}-${tIdx}-${sIdx}`);
                const iEl = document.getElementById(`img-${currentEditCat}-${tIdx}-${sIdx}`);
                if (tEl) step.title = tEl.value;
                if (xEl) step.text = xEl.value;
                if (iEl) {
                    step.images = iEl.value.split(',').map(s => s.trim()).filter(s => s.length > 0);
                }
            });
        }
    });
}

function closeEditModal() {
    saveCurrentModalInputs();
    document.getElementById('edit-modal').style.display = 'none';
    loadAdminData();
}

function addNewCategoryModal() {
    const key = 'cat_' + Date.now();
    draftDb[key] = {
        title: "Nová sekce",
        icon: "fa-folder-open",
        highlight: false,
        topics: [{ name: "Hlavní téma", steps: [{ title: "Krok 1", text: "Zde zadejte text návodu...", images: [] }] }]
    };
    loadAdminData();
    openAdminEditModal(key);
}

function deleteCategory(key) {
    if (confirm('Opravdu chcete tuto dlaždici smazat?')) {
        delete draftDb[key];
        loadAdminData();
    }
}

function loadReports() {
    let reports = JSON.parse(localStorage.getItem('guid_reports') || '[]');
    const container = document.getElementById('admin-reports');
    const badge = document.getElementById('reports-badge');
    if (badge) badge.innerText = reports.length;

    if (!container) return;
    if (reports.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem;">Zatím žádná hlášení.</p>';
        return;
    }

    container.innerHTML = reports.map((r, idx) => `
        <div class="report-card" style="background:#F8FAFC; border:1px solid var(--border-color); padding:10px; border-radius:8px; margin-bottom:8px;">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--brand-green); font-weight:bold; margin-bottom:4px;">
                <span>👤 ${r.name}</span>
                <span>${r.date}</span>
            </div>
            <p style="font-size:0.83rem; margin-bottom:8px; color:var(--text-main);">${r.message}</p>
            <button class="btn-top-action" style="background:#EF4444; color:#fff; border-color:#EF4444; font-size:0.7rem; padding:4px 8px;" onclick="resolveReport(${idx})">Vyřešit / Smazat</button>
        </div>
    `).join('');
}

function resolveReport(idx) {
    let reports = JSON.parse(localStorage.getItem('guid_reports') || '[]');
    reports.splice(idx, 1);
    localStorage.setItem('guid_reports', JSON.stringify(reports));
    loadReports();
}

function previewDraft() {
    saveCurrentModalInputs();
    localStorage.setItem('guid_db_custom', JSON.stringify(draftDb));
    window.open('index.html', '_blank');
}

function publishAll() {
    saveCurrentModalInputs();
    db = JSON.parse(JSON.stringify(draftDb));
    localStorage.setItem('guid_db_custom', JSON.stringify(db));
    alert('✅ Změny byly úspěšně uloženy a publikovány!');
}
