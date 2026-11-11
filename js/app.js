function getActiveDb() {
    let custom = localStorage.getItem('guid_db_custom');
    if (custom) {
        try { 
            let parsed = JSON.parse(custom);
            if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
                return parsed;
            }
        } catch(e) {}
    }
    return getSafeDb();
}

let db = getActiveDb();

function renderGrid() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;

    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');

    grid.innerHTML = Object.keys(db).map(key => {
        const cat = db[key];
        if (!cat) return '';
        const style = cat.span ? 'grid-column: span 2; aspect-ratio: auto; padding: 16px;' : '';
        const hlClass = cat.highlight ? 'highlight' : '';
        const lockIcon = cat.isSecure ? '<div style="position:absolute; top:8px; right:8px; font-size:0.75rem; color:#EF4444;"><i class="fa-solid fa-lock"></i></div>' : '';
        const iconClass = cat.icon || 'fa-folder-open';

        return `
            <div class="grid-item ${hlClass}" style="${style}" onclick="openCategory('${key}')">
                ${lockIcon}
                <div class="icon"><i class="fa-solid ${iconClass}"></i></div>
                <h3>${cat.title}</h3>
                <p>Zobrazit návod</p>
            </div>
        `;
    }).join('');
}

function openCategory(catKey) {
    const cat = db[catKey];
    if (!cat) return;

    let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');
    stats[catKey] = (stats[catKey] || 0) + 1;
    localStorage.setItem('guid_stats', JSON.stringify(stats));

    document.getElementById('modal-category-title').innerText = cat.title;
    const body = document.getElementById('modal-body');

    // Pokud je sekce zabezpečená (Ceníky a smlouvy) a uživatel ještě není odemčený
    if (cat.isSecure && localStorage.getItem('guid_secure_unlocked') !== 'true') {
        body.innerHTML = `
            <div class="guide-step" style="text-align: center; padding: 25px 15px; border: 2px dashed var(--border-color);">
                <div style="font-size: 2.2rem; color: #F59E0B; margin-bottom: 10px;"><i class="fa-solid fa-shield-halved"></i></div>
                <h4 style="margin-bottom: 8px; justify-content: center; color: var(--text-main);">Zabezpečená sekce</h4>
                <p style="color: var(--text-muted); font-size: 0.83rem; margin-bottom: 15px; line-height: 1.5;">Z důvodu ochrany osobních údajů a interních pravidel nelze ceníky a smlouvy volně zveřejňovat. Veškeré potřebné údaje a aktuality najdete také ve firemní WhatsApp skupině.</p>
                
                <div style="background: var(--step-bg); padding: 14px; border-radius: 12px; border: 1px solid var(--border-color); max-width: 320px; margin: 0 auto;">
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 6px;">ZADEJTE PŘÍSTUPOVÝ KÓD:</label>
                    <input type="password" id="secure-pass-input" class="input-field" placeholder="Zadejte kód..." style="text-align: center; margin-bottom: 10px;">
                    <button class="btn-confirm" onclick="verifySecureAccess()">Odemknout dokumenty</button>
                </div>
            </div>
        `;
    } else {
        // Běžné zobrazení obsahu nebo odemčených dokumentů
        let contentHtml = cat.topics.map(top => `
            <div style="margin-bottom: 20px;">
                <h3 style="color: var(--brand-green); font-size: 0.9rem; margin-bottom: 10px; font-weight: 700; border-bottom: 1px solid var(--border-color); padding-bottom: 4px;">${top.name}</h3>
                ${top.steps.map(step => `
                    <div class="guide-step">
                        <h4><i class="fa-solid fa-circle-chevron-right" style="font-size:0.8rem;"></i> ${step.title}</h4>
                        <p>${formatText(step.text)}</p>
                        ${step.images && step.images.length > 0 ? `
                            <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 8px;">
                                ${step.images.map(img => `<img src="${img.trim()}" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color);" alt="Dokument">`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `).join('');

        // Pokud jde o odemčenou zabezpečenou sekci, můžeme nahoře přidat tlačítko pro opětovné uzamčení
        if (cat.isSecure) {
            contentHtml = `
                <div style="display: flex; justify-content: flex-end; margin-bottom: 12px;">
                    <button class="btn-top-action" onclick="lockSecureSection()" style="background: #FEE2E2; color: #EF4444; border-color: #FEE2E2;"><i class="fa-solid fa-lock"></i> Uzamknout zpět</button>
                </div>
            ` + contentHtml;
        }

        body.innerHTML = contentHtml;
    }

    document.getElementById('content-modal').style.display = 'block';
}

function verifySecureAccess() {
    const input = document.getElementById('secure-pass-input');
    if (!input) return;
    if (input.value.trim() === 'admin123') {
        localStorage.setItem('guid_secure_unlocked', 'true');
        openCategory('pricing_secure');
    } else {
        alert('❌ Nesprávný přístupový kód!');
        input.value = '';
    }
}

function lockSecureSection() {
    localStorage.removeItem('guid_secure_unlocked');
    openCategory('pricing_secure');
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
