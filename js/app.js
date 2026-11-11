function renderGrid() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;

    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');

    grid.innerHTML = Object.keys(db).map(key => {
        const cat = db[key];
        const style = cat.span ? 'grid-column: span 2; aspect-ratio: auto; padding: 16px;' : '';
        const hlClass = cat.highlight ? 'highlight' : '';
        const lockIcon = cat.isSecure ? '<div style="position:absolute; top:8px; right:8px; font-size:0.75rem; color:#EF4444;"><i class="fa-solid fa-lock"></i></div>' : '';

        return `
            <div class="grid-item ${hlClass}" style="${style}" onclick="openCategory('${key}')">
                ${lockIcon}
                <div class="icon"><i class="fa-solid ${cat.icon || 'fa-folder'}"></i></div>
                <h3>${cat.title}</h3>
                <p>Zobrazit návod</p>
            </div>
        `;
    }).join('');
}

function openCategory(catKey) {
    const cat = db[catKey];
    if (!cat) return;

    if (cat.isSecure && localStorage.getItem('guid_secure_unlocked') !== 'true') {
        let pass = prompt('🔒 Tato sekce je zabezpečená.\nZadejte heslo pro přístup k ceníkům a smlouvám:');
        if (pass === 'admin123') {
            localStorage.setItem('guid_secure_unlocked', 'true');
        } else {
            if (pass !== null) {
                alert('❌ Nesprávné heslo!');
            }
            showRestrictedNotice(cat.title);
            return;
        }
    }

    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');
    stats[catKey] = (stats[catKey] || 0) + 1;
    localStorage.setItem('guid_stats', JSON.stringify(stats));

    document.getElementById('modal-category-title').innerText = cat.title;
    const body = document.getElementById('modal-body');

    body.innerHTML = cat.topics.map(top => `
        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--brand-green); font-size: 0.9rem; margin-bottom: 10px; font-weight: 700; border-bottom: 1px solid var(--border-color); padding-bottom: 4px;">${top.name}</h3>
            ${top.steps.map(step => `
                <div class="guide-step">
                    <h4><i class="fa-solid fa-circle-chevron-right" style="font-size:0.8rem;"></i> ${step.title}</h4>
                    <p>${formatText(step.text)}</p>
                </div>
            `).join('')}
        </div>
    `).join('');

    document.getElementById('content-modal').style.display = 'block';
}

function showRestrictedNotice(title) {
    document.getElementById('modal-category-title').innerText = title;
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <div class="guide-step" style="text-align: center; padding: 30px 15px;">
            <div style="font-size: 2.5rem; color: #F59E0B; margin-bottom: 12px;"><i class="fa-solid fa-lock"></i></div>
            <h4 style="margin-bottom: 10px; justify-content: center;">Přístup omezen</h4>
            <p style="color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;">Aktuální ceník a smlouva vám byla zaslána na e-mail. Ceník a podrobnosti najdete také ve firemní WhatsApp skupině.</p>
            <button class="btn-confirm" style="width: auto; margin: 0 auto; padding: 10px 24px; display: inline-block;" onclick="openCategory('pricing_secure')">Zkusit zadat heslo znovu</button>
        </div>
    `;
    document.getElementById('content-modal').style.display = 'block';
}

function formatText(text) {
    if (!text) return '';
    return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function closeContentModal() {
    document.getElementById('content-modal').style.display = 'none';
}

function openSupportModal() {
    document.getElementById('support-modal').style.display = 'block';
}
function closeSupportModal() {
    document.getElementById('support-modal').style.display = 'none';
}

function openLegalModal() {
    document.getElementById('legal-modal').style.display = 'block';
}
function closeLegalModal() {
    document.getElementById('legal-modal').style.display = 'none';
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('📋 Zkopírováno do schránky: ' + text);
    });
}

function submitReport() {
    const name = document.getElementById('report-name').value.trim();
    const msg = document.getElementById('report-msg').value.trim();
    if (!name || !msg) {
        alert('⚠️ Vyplňte prosím své jméno i zprávu.');
        return;
    }
    let reports = JSON.parse(localStorage.getItem('guid_reports') || '[]');
    reports.push({ name, message: msg, date: new Date().toLocaleDateString('cs-CZ') + ' ' + new Date().toLocaleTimeString('cs-CZ', {hour: '2-digit', minute:'2-digit'}) });
    localStorage.setItem('guid_reports', JSON.stringify(reports));
    document.getElementById('report-name').value = '';
    document.getElementById('report-msg').value = '';
    alert('✅ Hlášení bylo úspěšně odesláno správci.');
}

window.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    if (localStorage.getItem('guid_admin_logged') === 'true') {
        const btn = document.getElementById('btn-return-admin');
        if (btn) btn.style.display = 'flex';
    }
});
