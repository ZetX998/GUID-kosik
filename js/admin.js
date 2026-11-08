let db = getSafeDb();
let draftDb = null;

function checkAdminAuth() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === 'admin123') {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        loadAdminData();
    } else {
        alert('❌ Nesprávné heslo!');
    }
}

async function loadAdminData() {
    draftDb = JSON.parse(JSON.stringify(db));
    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');

    if (firestoreDb) {
        try {
            const snap = await firestoreDb.collection("guid_stats").get();
            snap.forEach(doc => { stats[doc.id] = doc.data().views || 0; });
        } catch (e) {}
    }

    const editor = document.getElementById('admin-editor');
    let html = '';

    for (let catKey in draftDb) {
        const views = stats[catKey] || 0;
        html += `
            <div class="guide-step">
                <div class="stat-badge">👁️ ${views} zobrazení</div>
                <h4>${sanitizeText(draftDb[catKey].title)}</h4>
        `;
        draftDb[catKey].topics.forEach((top, tIdx) => {
            html += `<p style="font-weight:bold; color:var(--text-light); margin-top:8px;">Téma: ${sanitizeText(top.name)}</p>`;
            top.steps.forEach((step, sIdx) => {
                html += `
                    <label style="font-size:0.75rem; color:var(--text-sub);">Název kroku:</label>
                    <input type="text" class="input-field" id="t-${catKey}-${tIdx}-${sIdx}" value="${sanitizeText(step.title)}">
                    <label style="font-size:0.75rem; color:var(--text-sub);">Text:</label>
                    <textarea class="admin-textarea" id="x-${catKey}-${tIdx}-${sIdx}">${sanitizeText(step.text)}</textarea>
                    <label style="font-size:0.75rem; color:var(--text-sub);">Obrázky (oddělené čárkou):</label>
                    <input type="text" class="input-field" id="i-${catKey}-${tIdx}-${sIdx}" value="${step.images ? step.images.join(', ') : ''}">
                `;
            });
        });
        html += `</div>`;
    }
    editor.innerHTML = html;
    loadReports();
}

async function loadReports() {
    let reports = JSON.parse(localStorage.getItem('guid_reports') || '[]');
    if (firestoreDb) {
        try {
            const snap = await firestoreDb.collection("guid_reports").get();
            const fbReports = [];
            snap.forEach(doc => fbReports.push(doc.data()));
            if (fbReports.length > 0) reports = fbReports;
        } catch (e) {}
    }

    const container = document.getElementById('admin-reports');
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

function syncDraft() {
    for (let catKey in draftDb) {
        draftDb[catKey].topics.forEach((top, tIdx) => {
            top.steps.forEach((step, sIdx) => {
                const tEl = document.getElementById(`t-${catKey}-${tIdx}-${sIdx}`);
                const xEl = document.getElementById(`x-${catKey}-${tIdx}-${sIdx}`);
                const iEl = document.getElementById(`i-${catKey}-${tIdx}-${sIdx}`);
                if (tEl) step.title = tEl.value;
                if (xEl) step.text = xEl.value;
                if (iEl) step.images = iEl.value ? iEl.value.split(',').map(s => s.trim()).filter(Boolean) : [];
            });
        });
    }
}

function previewDraft() {
    syncDraft();
    localStorage.setItem('guid_db_custom', JSON.stringify(draftDb));
    window.open('index.html', '_blank');
}

async function publishAll() {
    const btn = document.getElementById('btn-pub');
    btn.disabled = true;
    btn.innerText = '⏳ Publikuji...';

    try {
        syncDraft();
        db = JSON.parse(JSON.stringify(draftDb));
        localStorage.setItem('guid_db_custom', JSON.stringify(db));

        if (firestoreDb) {
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
        btn.disabled = false;
        btn.innerText = '🚀 Publikovat všem';
    }
}
