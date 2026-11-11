document.addEventListener('DOMContentLoaded', () => {
    renderMainGrid();
    // Pokud je uživatel v náhledu z adminu, ukážeme tlačítko zpět
    if (localStorage.getItem('guid_db_custom')) {
        const btnReturn = document.getElementById('btn-return-admin');
        if (btnReturn) btnReturn.style.display = 'flex';
    }
});

function renderMainGrid() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;

    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');

    grid.innerHTML = Object.keys(db).map(key => {
        const cat = db[key];
        const views = stats[key] || 0;
        const style = cat.span ? 'grid-column: span 2; aspect-ratio: auto; padding: 14px;' : '';
        const hlClass = cat.highlight ? 'highlight' : '';
        return `
            <div class="grid-item ${hlClass}" style="${style}" onclick="openCategory('${key}')">
                <div style="position:absolute; top:8px; right:8px; font-size:0.65rem; color:var(--text-secondary);">👁️ ${views}</div>
                <div class="icon"><i class="fa-solid ${cat.icon || 'fa-folder'}"></i></div>
                <h3>${cat.title}</h3>
                <p>Zobrazit návody</p>
            </div>
        `;
    }).join('');
}

function openCategory(catKey) {
    const cat = db[catKey];
    if (!cat) return;

    // Přičtení zobrazení
    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');
    stats[catKey] = (stats[catKey] || 0) + 1;
    localStorage.setItem('guid_stats', JSON.stringify(stats));

    document.getElementById('modal-category-title').innerText = cat.title;
    const body = document.getElementById('modal-body');

    let html = '';

    // Pokud je sekce zabezpečená (ceník), vložíme kontrolu hesla
    if (cat.isSecure) {
        html += `
            <div class="guide-step" style="border-color: rgba(16, 185, 129, 0.4); margin-bottom: 20px;">
                <h4><i class="fa-solid fa-lock"></i> Zabezpečená sekce</h4>
                <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px;">Pro zobrazení interního ceníku zadejte tajný kód.</p>
                <div style="display:flex; gap:8px;">
                    <input type="password" id="secure-pass-input" class="input-field" placeholder="Zadejte kód" style="margin:0;">
                    <button class="btn-confirm" style="width:120px; margin:0;" onclick="verifySecureSection('${catKey}')">Ověřit</button>
                </div>
                <p id="secure-error" style="color:#EF4444; font-size:0.75rem; margin-top:6px; display:none;"><i class="fa-solid fa-triangle-exclamation"></i> Nesprávný kód!</p>
                <p id="secure-success" style="color:var(--brand-green-bright); font-size:0.75rem; margin-top:6px; display:none;"><i class="fa-solid fa-circle-check"></i> Kód správně, sekce odemčena!</p>
            </div>
            <div id="secure-content-box" style="display:none;">
        `;
    }

    cat.topics.forEach(top => {
        html += `<h3 style="color:var(--brand-green-bright); margin:18px 0 10px 0; font-size:0.95rem;">${top.name}</h3>`;
        top.steps.forEach(step => {
            html += `
                <div class="guide-step">
                    <h4 style="font-size:0.9rem; margin-bottom:6px; color:#fff;">${step.title}</h4>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; white-space: pre-wrap;">${step.text}</p>
                </div>
            `;
        });
    });

    if (cat.isSecure) {
        html += `</div>`;
    }

    body.innerHTML = html;
    document.getElementById('content-modal').style.display = 'block';
}

function verifySecureSection(catKey) {
    const input = document.getElementById('secure-pass-input');
    const err = document.getElementById('secure-error');
    const succ = document.getElementById('secure-success');
    const box = document.getElementById('secure-content-box');

    if (input && input.value.trim() === 'admin123') {
        err.style.display = 'none';
        succ.style.display = 'block';
        box.style.display = 'block';
    } else {
        err.style.display = 'block';
        succ.style.display = 'none';
        box.style.display = 'none';
    }
}

function closeContentModal() {
    document.getElementById('content-modal').style.display = 'none';
}

function openSupportModal() { document.getElementById('support-modal').style.display = 'block'; }
function closeSupportModal() { document.getElementById('support-modal').style.display = 'none'; }
function openLegalModal() { document.getElementById('legal-modal').style.display = 'block'; }
function closeLegalModal() { document.getElementById('legal-modal').style.display = 'none'; }

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('✅ Zkopírováno do schránky: ' + text);
}

function submitReport() {
    const name = document.getElementById('report-name').value.trim() || 'Anonym';
    const message = document.getElementById('report-msg').value.trim();
    if (!message) {
        alert('⚠️ Vyplňte prosím text hlášení.');
        return;
    }

    let reports = JSON.parse(localStorage.getItem('guid_reports') || '[]');
    reports.push({ name, message, date: new Date().toLocaleString('cs-CZ') });
    localStorage.setItem('guid_reports', JSON.stringify(reports));

    document.getElementById('report-msg').value = '';
    alert('✅ Hlášení bylo úspěšně odesláno do administrace!');
}
