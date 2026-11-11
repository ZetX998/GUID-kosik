let db = getSafeDb();
let draftDb = null;
let currentEditCat = null;

function checkAdminAuth() {
    const passInput = document.getElementById('admin-pass');
    if (!passInput) return;
    
    const pass = passInput.value.trim();
    if (pass === 'admin123') {
        const overlay = document.getElementById('auth-overlay');
        const main = document.getElementById('admin-main-container');
        
        if (overlay) overlay.style.display = 'none';
        if (main) main.style.display = 'block';
        
        loadAdminData();
    } else {
        alert('❌ Nesprávné heslo!');
    }
}

async function loadAdminData() {
    draftDb = JSON.parse(JSON.stringify(db));
    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');

    if (typeof firestoreDb !== 'undefined' && firestoreDb) {
        try {
            const snap = await firestoreDb.collection("guid_stats").get();
            snap.forEach(doc => { stats[doc.id] = doc.data().views || 0; });
        } catch (e) {}
    }

    const grid = document.getElementById('admin-grid');
    if (!grid) return;
    
    // Mřížka dlaždic v adminu odpovídající hlavní stránce
    const categoryMeta = [
        { key: 'gaia_login', icon: '📲', title: 'Start směny & GAIA', highlight: true },
        { key: 'car_home', icon: '🚗', title: 'Auto domů', highlight: false },
        { key: 'shifts', icon: '📅', title: 'Plánování směn', highlight: false },
        { key: 'invoicing', icon: '🧾', title: 'Inkaso & Vkladomaty', highlight: false },
        { key: 'delivery', icon: '📦', title: 'Doručování & Storna', highlight: false },
        { key: 'customer', icon: '🚪', title: 'U zákazníka & Desatero', highlight: false },
        { key: 'bonuses', icon: '🏆', title: 'Bonusy & Odměny', highlight: true },
        { key: 'forms', icon: '📝', title: 'Žádosti & Formuláře', highlight: false },
        { key: 'contacts', icon: '📞', title: 'Kde najít kontakty', highlight: false, span: true },
    ];

    grid.innerHTML = categoryMeta.map(cat => {
        const views = stats[cat.key] || 0;
        const style = cat.span ? 'grid-column: span 2; aspect-ratio: auto; padding: 14px;' : '';
        const hlClass = cat.highlight ? 'highlight' : '';
        return `
            <div class="grid-item ${hlClass}" style="${style}" onclick="openAdminEditModal('${cat.key}')">
                <div class="stat-badge" style="position:absolute; top:8px; right:8px; font-size:0.65rem; padding:2px 6px;">👁️ ${views}</div>
                <div class="icon">${cat.icon}</div>
                <h3>${cat.title}</h3>
                <p>Kliknutím upravit obsah</p>
            </div>
        `;
    }).join('');

    loadReports();
}

function openAdminEditModal(catKey) {
    currentEditCat = catKey;
    const catData = draftDb[catKey];
    if (!catData) return;

    document.getElementById('edit-modal-title').innerText = 'Úprava: ' + catData.title;
    const body = document.getElementById('edit-modal-body');
    
    let html = '';
    catData.topics.forEach((top, tIdx) => {
        html += `<h3 style="color:var(--brand-green-bright); margin:15px 0 8px 0;">Téma: ${sanitizeText(top.name)}</h3>`;
        top.steps.forEach((step, sIdx) => {
            html += `
                <div class="guide-step">
                    <label style="font-size:0.75rem; color:var(--text-sub);">Název kroku:</label>
                    <input type="text" class="input-field" id="t-${catKey}-${tIdx}-${sIdx}" value="${sanitizeText(step.title)}">
                    <label style="font-size:0.75rem; color:var(--text-sub);">Text:</label>
                    <textarea class="admin-textarea" id="x-${catKey}-${tIdx}-${sIdx}">${sanitizeText(step.text)}</textarea>
                    <label style="font-size:0.75rem; color:var(--text-sub);">Obrázky (oddělené čárkou):</label>
                    <input type="text" class="input-field" id="i-${catKey}-${tIdx}-${sIdx}" value="${step.images ? step.images.join(', ') : ''}">
                </div>
            `;
        });
    });
    
    body.innerHTML = html;
    document.getElementById('edit-modal').style.display = 'block';
}

function closeEditModal() {
    if (currentEditCat) {
        const catData = draftDb[currentEditCat];
        catData.topics.forEach((top, tIdx) => {
            top.steps.forEach((step, sIdx) => {
                const tEl = document.getElementById(`t-${currentEditCat}-${tIdx}-${sIdx}`);
                const xEl = document.getElementById(`x-${currentEditCat}-${tIdx}-${sIdx}`);
                const iEl = document.getElementById(`i-${currentEditCat}-${tIdx}-${sIdx}`);
                if (tEl) step.title = tEl.value;
                if (xEl) step.text = xEl.value;
                if (iEl) step.images = iEl.value ? iEl.value.split(',').map(s => s.trim()).filter(Boolean) : [];
            });
        });
    }
    document.getElementById('edit-modal').style.display = 'none';
}

async function loadReports() {
    let reports = JSON.parse(localStorage.getItem('guid_reports') || '[]');
    if (typeof firestoreDb !== 'undefined' && firestoreDb) {
        try {
            const snap = await firestoreDb.collection("guid_reports").get();
            const fbReports = [];
            snap.forEach(doc => fbReports.push(doc.data()));
            if (fbReports.length > 0) reports = fbReports;
        } catch (e) {}
    }

    const container = document.getElementById('admin-reports');
    if (!container) return;

    const badge = document.getElementById('reports-badge');
    if (badge) badge.innerText = reports.length;

    if (reports.length === 0) {
        container.innerHTML = '<p style="color:var(--text-sub);">Zatím žádná hlášení od kurýrů.</p>';
        return;
    }

    container.innerHTML = reports.map(r => `
        <div class="report-card ${r.resolved ? 'resolved' : ''}">
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--brand-green-bright); font-weight:bold;">
                <span>👤 ${sanitizeText(r.name)}</span>
                <span>${sanitizeText(r.date)}</span>
            </div>
            <p style="margin-top:6px; font-size:0.9rem;">${sanitizeText(r.message)}</p>
        </div>
    `).join('');
}

function previewDraft() {
    closeEditModal();
    localStorage.setItem('guid_db_custom', JSON.stringify(draftDb));
    window.open('index.html', '_blank');
}

async function publishAll() {
    closeEditModal();
    const btn = document.getElementById('btn-pub');
    if (btn) {
        btn.disabled = true;
        btn.innerText = '⏳ Publikuji...';
    }

    try {
        db = JSON.parse(JSON.stringify(draftDb));
        localStorage.setItem('guid_db_custom', JSON.stringify(db));

        if (typeof firestoreDb !== 'undefined' && firestoreDb) {
            await firestoreDb.collection("guid_data").doc("main").set({
                content: db,
                updatedAt: new Date().toISOString()
            });
            alert('✅ Publikováno všem kurýrům!');
        } else {
            alert('✅ Uloženo lokálně! (Pro globální synchronizaci doplňte Firebase klíče v js/firebase-config.js)');
        }
    } catch (e) {
        alert('⚠️ Chyba při publikaci. Změny zůstaly uloženy lokálně.');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerText = '🚀 Publikovat';
        }
    }
    }
