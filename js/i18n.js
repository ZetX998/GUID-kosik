const translations = {
    cs: {
        title: "GUID Kurýr - Znalostní Báze",
        searchPlaceholder: "🔍 Hledat (HW, vkladomaty, desatero, storno)...",
        home: "Domů",
        back: "← Zpět",
        close: "✕",
        categories: {
            gaia_login: { title: "Start směny & GAIA", desc: "Fialový box, palubní deska" },
            invoicing: { title: "Inkaso & Vkladomaty", desc: "Pravidla, mapa bankomatů" },
            customer: { title: "U zákazníka & Desatero", desc: "18+, občanka, chování" },
            contacts: { title: "Důležité kontakty", desc: "GAIA & WhatsApp skupiny" }
        },
        reportBtn: "Nahlásit chybu / Chybí v aplikaci",
        reportDesc: "Rychlá zpráva pro admina bez registrace",
        reportTitle: "💬 Nahlásit chybu",
        reportSub: "Chybí tu něco nebo je adresa špatně?",
        reportDescText: "Napište nám bez registrace. Zpráva jde přímo administrátorovi.",
        namePlaceholder: "Vaše jméno nebo přezdívka",
        msgPlaceholder: "Popište, co upravit nebo doplnit...",
        sendBtn: "📩 Odeslat hlášení",
        adminLogin: "🔒 Admin Přihlášení",
        adminLoginText: "Zadejte heslo pro správu aplikace GUID Kurýr.",
        adminPassPlaceholder: "Heslo (admin123)",
        loginBtn: "Přihlásit se",
        adminTitle: "🛠️ GUID Admin",
        previewBtn: "👁️ Náhled",
        publishBtn: "🚀 Publikovat všem",
        reportsTitle: "📩 Hlášení od kurýrů",
        editorTitle: "📝 Editor sekcí & Statistiky"
    },
    ua: {
        title: "GUID Кур'єр - База знань",
        searchPlaceholder: "🔍 Пошук (HW, банкомати, десатеро, сторно)...",
        home: "Головна",
        back: "← Назад",
        close: "✕",
        categories: {
            gaia_login: { title: "Початок зміни & GAIA", desc: "Фіолетовий бокс, приладова панель" },
            invoicing: { title: "Інкасо & Банкомати", desc: "Правила, мапа банкоматів" },
            customer: { title: "У клієнта & Десатеро", desc: "18+, паспорт, правила поведінки" },
            contacts: { title: "Важливі контакти", desc: "GAIA & WhatsApp групи" }
        },
        reportBtn: "Повідомити про помилку / Чогось не вистачає",
        reportDesc: "Швидке повідомлення для адміна без реєстрації",
        reportTitle: "💬 Повідомити про помилку",
        reportSub: "Чогось не вистачає або адреса невірна?",
        reportDescText: "Напишіть нам без реєстрації. Повідомлення надходить безпосередньо адміністратору.",
        namePlaceholder: "Ваше ім'я або псевдонім",
        msgPlaceholder: "Опишіть, що потрібно виправити або додати...",
        sendBtn: "📩 Надіслати звіт",
        adminLogin: "🔒 Вхід для адміна",
        adminLoginText: "Введіть пароль для керування додатком GUID Кур'єр.",
        adminPassPlaceholder: "Пароль (admin123)",
        loginBtn: "Увійти",
        adminTitle: "🛠️ GUID Адмін",
        previewBtn: "👁️ Попередній перегляд",
        publishBtn: "🚀 Опублікувати всім",
        reportsTitle: "📩 Звіти від кур'єрів",
        editorTitle: "📝 Редактор розділів & Статистика"
    }
};

let currentLang = localStorage.getItem('guid_lang') || 'cs';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('guid_lang', lang);
    document.getElementById('lang-toggle-btn').innerText = lang === 'cs' ? '🇺🇦 UA' : '🇨🇿 CZ';
    updateTexts();
}

function toggleLanguage() {
    setLanguage(currentLang === 'cs' ? 'ua' : 'cs');
}

function t(key) {
    try {
        const keys = key.split('.');
        let val = translations[currentLang];
        for (let k of keys) {
            val = val[k];
        }
        return val || key;
    } catch (e) {
        return key;
    }
}

function updateTexts() {
    document.title = t('title');
    const searchInput = document.querySelector('.search-bar');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    
    // Aktualizace hlavních dlaždic
    const catKeys = ['gaia_login', 'invoicing', 'customer', 'contacts'];
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
