let db = getSafeDb();
let currentCatKey = '';

// Živý poslech změn z Firebase
if (firestoreDb) {
    firestoreDb.collection("guid_data").doc("main").onSnapshot((doc) => {
        if (doc.exists && doc.data().content) {
            db = doc.data().content;
            localStorage.setItem('guid_db_custom', JSON.stringify(db));
        }
    }, (err) => console.warn("Offline režim:", err));
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('guid_theme') === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('theme-icon').innerText = '☀️';
    }
});

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    document.getElementById('theme-icon').innerText = isLight ? '☀️' : '🌙';
    localStorage.setItem('guid_theme', isLight ? 'light' : 'dark');
}

// Počítání zobrazení sekce (na pozadí, bez zpomalení)
function trackView(catKey) {
    try {
        let stats = JSON.parse(localStorage.getItem('guid_stats') || '{}');
        stats[catKey] = (stats[catKey] || 0) + 1;
        localStorage.setItem('guid_stats', JSON.stringify(stats));

        if (firestoreDb) {
            firestoreDb.collection("guid_stats").doc(catKey).set({
                views: firebase.firestore.FieldValue.increment(1)
            }, { merge: true }).catch(() => {});
        }
    } catch (e) {}
}

function openSubCategory(key) {
    currentCatKey = key;
    trackView(key);
    const data = db[key];
    if (!data) return;

    document.getElementById('sub-title').innerText = data.title;
    const container = document.getElementById('sub-list-container');
    container.innerHTML = data.topics.map(t => `
        <div class="sub-list-item" onclick="openDetail('${t.id}')">
            <h4>${sanitizeText(t.name)}</h4>
            <span>›</span>
        </div>
    `).join('');
    document.getElementById('sub-view').style.display = 'block';
}

function openDetail(topicId) {
    const data = db[currentCatKey];
    const topic = data.topics.find(t => t.id === topicId);
    if (!topic) return;

    document.getElementById('detail-title').innerText = topic.name;
    const container = document.getElementById('detail-content');
    
    container.innerHTML = topic.steps.map(s => {
        let imgHtml = '';
        if (s.images && s.images.length > 0) {
            const cls = s.imgLayout === 'grid' ? 'img-container-grid' : 'img-container-vertical';
            imgHtml = `<div class="${cls}">` + 
                s.images.map(img => `<img src="${sanitizeText(img)}" class="guide-img" onclick="openLightbox('${sanitizeText(img)}')" onerror="this.style.display='none'">`).join('') + 
                `</div>`;
        }
        return `
            <div class="guide-step">
                <h4>📌 ${sanitizeText(s.title)}</h4>
                <p>${sanitizeText(s.text)}</p>
                ${imgHtml}
            </div>
        `;
    }).join('');

    document.getElementById('sub-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';
}

function backToSub() {
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('sub-view').style.display = 'block';
}

function goHome() {
    document.getElementById('sub-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('report-view').style.display = 'none';
}

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-modal').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
}

function handleSearch(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(q) ? 'flex' : 'none';
    });
}

// Hlášení chyb s ochranou proti spamu (60s limit)
function openReportModal() {
    document.getElementById('report-view').style.display = 'block';
}

async function submitReport() {
    const lastSent = localStorage.getItem('guid_last_report');
    if (lastSent && (Date.now() - parseInt(lastSent)) < 60000) {
        alert('⏳ Počkejte prosím minutu před odesláním dalšího hlášení (ochrana proti spamu).');
        return;
    }

    const name = document.getElementById('rep-name').value.trim();
    const msg = document.getElementById('rep-msg').value.trim();
    if (!name || !msg) {
        alert('Vyplňte prosím jméno i zprávu.');
        return;
    }

    const reportObj = {
        id: 'rep_' + Date.now(),
        name: sanitizeText(name),
        message: sanitizeText(msg),
        date: new Date().toLocaleString('cs-CZ'),
        resolved: false
    };

    try {
        let reports = JSON.parse(localStorage.getItem('guid_reports') || '[]');
        reports.unshift(reportObj);
        localStorage.setItem('guid_reports', JSON.stringify(reports));
        localStorage.setItem('guid_last_report', Date.now().toString());

        if (firestoreDb) {
            await firestoreDb.collection("guid_reports").doc(reportObj.id).set(reportObj);
        }

        alert('✅ Děkujeme! Hlášení bylo odesláno.');
        document.getElementById('rep-msg').value = '';
        goHome();
    } catch (e) {
        alert('⚠️ Chyba při odesílání. Zkuste to prosím znovu.');
    }
}
