function getSafeDb() {
    let custom = localStorage.getItem('guid_db_custom');
    if (custom) {
        try { return JSON.parse(custom); } catch(e) {}
    }
    return {
        "gaia_login": {
            title: "Start směny & GAIA",
            icon: "fa-mobile-screen-button",
            highlight: true,
            topics: [
                {
                    name: "1. Příjezd na Pragorent & Fialový HW box",
                    steps: [
                        { title: "Vyzvednutí hardware", text: "Přihlásit se můžete nejdříve 30 minut před začátkem časového okna. Na Pragorentu zamiřte k fialovému boxu.", images: [] }
                    ]
                }
            ]
        },
        "pricing_secure": {
            title: "Ceník & Smlouvy (Tajné)",
            icon: "fa-shield-halved",
            highlight: true,
            isSecure: true, // Vyžaduje heslo admin123
            topics: [
                {
                    name: "Interní mzdové tabulky",
                    steps: [
                        { title: "Utajené složky odměn", text: "Zde se nacházejí neveřejné dokumenty a smlouvy.", images: [] }
                    ]
                }
            ]
        },
        "vratne_obaly": {
            title: "Stravenky & Vratné obaly",
            icon: "fa-ticket",
            highlight: false,
            topics: [
                {
                    name: "Přehled akceptovaných obalů",
                    steps: [
                        { title: "Zálohované lahve a přepravky", text: "Pravidla pro přejímání vratných obalů od zákazníků a kontrola stavu.", images: [] }
                    ]
                }
            ]
        },
        "car_home": { title: "Auto domů", icon: "fa-car", highlight: false, topics: [{ name: "Základní pravidla", steps: [{ title: "Parkování vozidla", text: "Pokyny pro odstavení vozu.", images: [] }] }] },
        "shifts": { title: "Plánování směn", icon: "fa-calendar-days", highlight: false, topics: [{ name: "Rezervace", steps: [{ title: "Výběr oken", text: "Jak si správně naklikat směny.", images: [] }] }] },
        "invoicing": { title: "Inkaso & Vkladomaty", icon: "fa-file-invoice-dollar", highlight: false, topics: [{ name: "Hotovost", steps: [{ title: "Vklad do bankomatu", text: "Seznam vkladových bankomatů.", images: [] }] }] },
        "delivery": { title: "Doručování & Storna", icon: "fa-box-open", highlight: false, topics: [{ name: "Řešení problémů", steps: [{ title: "Storno objednávki", text: "Postup při stornu u zákazníka.", images: [] }] }] },
        "customer": { title: "U zákazníka & Desatero", icon: "fa-door-open", highlight: false, topics: [{ name: "Komunikace", steps: [{ title: "Pravidla chování", text: "Profesionální přístup u dveří.", images: [] }] }] },
        "bonuses": { title: "Bonusy & Odměny", icon: "fa-trophy", highlight: true, topics: [{ name: "Složky odměn", text: "Jak dosáhnout na prémie.", images: [] }] },
        "forms": { title: "Žádosti & Formuláře", icon: "fa-file-pen", highlight: false, topics: [{ name: "Omluvenky", steps: [{ title: "Hlášení absencí", text: "Formuláře pro omluvení.", images: [] }] }] },
        "contacts": { title: "Kde najít kontakty", icon: "fa-phone", highlight: false, span: true, topics: [{ name: "Důležitá čísla", steps: [{ title: "Dispečink", text: "Kontakty na podporu.", images: [] }] }] }
    };
}
let db = getSafeDb();
