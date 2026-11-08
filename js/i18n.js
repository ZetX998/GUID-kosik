const translations = {
    cs: {
        title: "GUID Kurýr - Znalostní Báze",
        searchPlaceholder: "🔍 Hledat (HW, vkladomaty, bonusy, storno)...",
        categories: {
            gaia_login: { title: "Start směny & GAIA", desc: "Fialový box, palubní deska" },
            car_home: { title: "Auto domů", desc: "Zapůjčení vozu přes noc" },
            shifts: { title: "Plánování směn", desc: "120h pravidlo, Semafor" },
            invoicing: { title: "Inkaso & Vkladomaty", desc: "Pravidla, mapa bankomatů" },
            delivery: { title: "Doručování & Storna", desc: "4krokový postup, RMF" },
            customer: { title: "U zákazníka & Desatero", desc: "18+, občanka, chování" },
            bonuses: { title: "Bonusy & Odměny", desc: "Jak vylepšit své skóre" },
            forms: { title: "Žádosti & Formuláře", desc: "Korekce zpoždění trasy" },
            contacts: { title: "Kde najít kontakty", desc: "GAIA, firemní telefon, WA" }
        },
        reportBtn: "Nahlásit chybu / Chybí v aplikaci",
        reportDesc: "Rychlá zpráva pro admina bez registrace"
    },
    ua: {
        title: "GUID Кур'єр - База знань",
        searchPlaceholder: "🔍 Пошук (HW, банкомати, бонуси, сторно)...",
        categories: {
            gaia_login: { title: "Початок зміни & GAIA", desc: "Фіолетовий бокс, приладова панель" },
            car_home: { title: "Авто додому", desc: "Оренда авто на ніч" },
            shifts: { title: "Планування змін", desc: "Правило 120 год, Світлофор" },
            invoicing: { title: "Інкасо & Банкомати", desc: "Правила, мапа банкоматів" },
            delivery: { title: "Доставка & Сторно", desc: "4 кроки перед сторно, RMF" },
            customer: { title: "У клієнта & Десатеро", desc: "18+, паспорт, поведінка" },
            bonuses: { title: "Бонуси & Винагороди", desc: "Як покращити свій рейтинг" },
            forms: { title: "Заявки & Формуляри", desc: "Корекція затримки маршруту" },
            contacts: { title: "Де знайти контакти", desc: "GAIA, робочий телефон, WA" }
        },
        reportBtn: "Повідомити про помилку / Чогось не вистачає",
        reportDesc: "Швидке повідомлення для адміна без реєстрації"
    }
};

let currentLang = localStorage.getItem('guid_lang') || 'cs';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('guid_lang', lang);
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) btn.innerText = lang === 'cs' ? '🇺🇦 UA' : '🇨🇿 CZ';
    updateTexts();
}

function toggleLanguage() {
    setLanguage(currentLang === 'cs' ? 'ua' : 'cs');
}

function t(key) {
    try {
        const keys = key.split('.');
        let val = translations[currentLang];
        for (let k of keys) val = val[k];
        return val || key;
    } catch (e) {
        return key;
    }
}

function updateTexts() {
    document.title = t('title');
    const searchInput = document.querySelector('.search-bar');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');

    const catKeys = ['gaia_login', 'car_home', 'shifts', 'invoicing', 'delivery', 'customer', 'bonuses', 'forms', 'contacts'];
    const items = document.querySelectorAll('.grid-item:not([onclick*="openReportModal"])');
    items.forEach((item, idx) => {
        if (catKeys[idx]) {
            const k = catKeys[idx];
            const h3 = item.querySelector('h3');
            const p = item.querySelector('p');
            if (h3) h3.innerText = t(`categories.${k}.title`);
            if (p) p.innerText = t(`categories.${k}.desc`);
        }
    });

    const repItem = document.querySelector('.grid-item[onclick*="openReportModal"] h3');
    if (repItem) repItem.innerText = t('reportBtn');
    const repDesc = document.querySelector('.grid-item[onclick*="openReportModal"] p');
    if (repDesc) repDesc.innerText = t('reportDesc');
}

document.addEventListener('DOMContentLoaded', () => {
    const btnText = currentLang === 'cs' ? '🇺🇦 UA' : '🇨🇿 CZ';
    const headerActions = document.querySelector('.header-actions');
    if (headerActions && !document.getElementById('lang-toggle-btn')) {
        const langBtn = document.createElement('button');
        langBtn.id = 'lang-toggle-btn';
        langBtn.className = 'btn-back';
        langBtn.style.padding = '6px 10px';
        langBtn.style.fontSize = '0.8rem';
        langBtn.innerText = btnText;
        langBtn.onclick = toggleLanguage;
        headerActions.insertBefore(langBtn, headerActions.firstChild);
    }
    updateTexts();
});
