let draftDb = JSON.parse(JSON.stringify(db));
let currentEditCat = null;

function checkAdminAuth() {
    const pass = document.getElementById('admin-pass').value.trim();
    if (pass === 'admin123') {
        document.getElementById('auth-overlay').style.display = 'none';
        document.getElementById('admin-main-container').style.display = 'block';
        loadAdminData();
    } else {
        alert('❌ Nesprávné heslo!');
    }
}

function loadAdminData() {
    const grid = document.getElementById('admin-grid');
    if (!grid) return;

    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');

    grid.innerHTML = Object.keys(draftDb).map(key => {
        const cat = draftDb[key];
        const views = stats[key] || 0;
        const style = cat.span ? 'grid-column: span 2; aspect-ratio: auto; padding: 14px;' : '';
        const hlClass = cat.highlight ? 'highlight' : '';
        return `
            <div class="grid-item ${hlClass}" style="${style}" onclick="openAdminEditModal('${key}')">
                <div style="position:absolute; top:8px; right:8px; font-size:0.65rem; color:var(--text-secondary);">👁️ ${views}</div>
                <div style="position:absolute; top:8px; left:8px; font-size:0.65rem; color:#EF4444;" onclick="event.stopPropagation(); deleteCategory('${key}')"><i class="fa-solid fa-trash"></i></div>
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
    const body = document.getElementById('edit-modal-body');

    let html = `
        <div class="guide-step" style="margin-bottom:15px;">
            <label style="font-size:0.75rem; color:var(--text-secondary);">Název dlaždice:</label>
            <input type="text" class="input-field" id="cat-title-input" value="${cat.title}" oninput="updateCatMeta('${catKey}')">
        </div>
    `;

    cat.topics.forEach((top, tIdx) => {
        html += `<h3 style="color:var(--brand-green-bright); margin:15px 0 8px 0; font-size:0.9rem;">Téma: ${top.name}</h3>`;
        top.steps.forEach((step, sIdx) => {
            html += `
                <div class="guide-step">
                    <label style="font-size:0.75rem; color:var(--text-secondary);">Název kroku:</label>
                    <input type="text" class="input-field" id="t-${catKey}-${tIdx}-${sIdx}" value="${step.title}">
                    <label style="font-size:0.75rem; color:var(--text-secondary);">Text návodu:</label>
                    <textarea class="admin-textarea" id="x-${catKey}-${tIdx}-${sIdx}">${step.text}</textarea>
                </div>
            `;
        });
    });

    body.innerHTML = html;
    document.getElementById('edit-modal').style.display = 'block';
}

function updateCatMeta(catKey) {
    const val = document.getElementById('cat-title-input').value;
    if (draftDb[catKey]) draftDb[catKey].title = val;
}

function closeEditModal() {
    if (currentEditCat && draftDb[currentEditCat]) {
        const cat = draftDb[currentEditCat];
        cat.topics.forEach((top, tIdx) => {
            top.steps.forEach((step, sIdx) => {
                const tEl = document.getElementById(`t-${currentEditCat}-${tIdx}-${sIdx}`);
                const xEl = document.getElementById(`x-${currentEditCat}-${tIdx}-${sIdx}`);
                if (tEl) step.title = tEl.value;
                if (xEl) step.text = xEl.value;
            });
        });
    }
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
        container.innerHTML = '<p style="color:var(--text-secondary); font-size:0.85rem;">Zatím žádná hlášení.</p>';
        return;
    }

    container.innerHTML = reports.map((r, idx) => `
        <div class="report-card">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--brand-green-bright); font-weight:bold; margin-bottom:4px;">
                <span>👤 ${r.name}</span>
                <span>${r.date}</span>
            </div>
            <p style="font-size:0.85rem; margin-bottom:8px;">${r.message}</p>
            <button class="btn-confirm" style="font-size:0.7rem; padding:4px; background:#EF4444; color:#fff;" onclick="resolveReport(${idx})">Vyřešit / Smazat</button>
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
    closeEditModal();
    localStorage.setItem('guid_db_custom', JSON.stringify(draftDb));
    window.open('index.html', '_blank');
}

function publishAll() {
    closeEditModal();
    db = JSON.parse(JSON.stringify(draftDb));
    localStorage.setItem('guid_db_custom', JSON.stringify(db));
    alert('✅ Změny byly úspěšně uloženy a publikovány!');
}
