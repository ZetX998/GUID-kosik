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
                    name: "1. Časové okno a přihlášení",
                    steps: [
                        { title: "Zahájení a sankce", text: "Přihlásit se můžete nejdřív 30 minut před začátkem časového okna a nejpozději do začátku směny.\n\n⚠️ Za pozdní přihlášení hrozí sankce. Nepříchod na směnu je penalizován podle platného ceníku.", images: [] }
                    ]
                },
                {
                    name: "2. Vyzvednutí HW u boxu",
                    steps: [
                        { title: "Postup u boxu", text: "Přijdete k boxu, zvolíte možnost „Převzít HW“ a zadáte své osobní telefonní číslo.\n\nDorazí vám SMS s číselným kódem, který zadáte do systému boxu. Otevře se schránka, ve které najdete klíček, terminál a firemní telefon.\n\nZkontrolujte, zda je vše nabité, funkční a zda je terminál správně spárovaný s telefonem. Schránku bezpečně zavřete.", images: [] }
                    ]
                },
                {
                    name: "3. Přesun k vozidlu a parkování",
                    steps: [
                        { title: "Parkování a závora", text: "Přesuňte se na velké parkoviště (případně hledejte na malém).\n\nPokud ještě nemáte své vozidlo v systému závory, zažádejte o přístup prostřednictvím příslušného formuláře. Do té doby parkujte vzadu na malém parkovišti a tuto skutečnost nahlaste teamleaderovi.", images: [] }
                    ]
                },
                {
                    name: "4. Přihlášení do GAIA",
                    steps: [
                        { title: "Spuštění aplikace", text: "Zapněte firemní telefon, zadejte PIN 1234 a spusťte aplikaci GAIA (případně použijte webový prohlížeč na iOS).\n\nPřihlaste se svým vlastním e-mailem (který jste uváděl ve smlouvě) a vygenerovaným heslem.", images: [] }
                    ]
                },
                {
                    name: "5. Spuštění rozvozu",
                    steps: [
                        { title: "Zahájení trasy", text: "V levém horním rohu aplikace GAIA rozklikněte menu a zvolte „Začít rozvoz“.\n\nZadejte firemní telefonní číslo (najdete ho v kontaktech v telefonu).\n\nNásledně proveďte povinnou fotodokumentaci vozidla a kontrolu případného poškození.", images: [] }
                    ]
                }
            ]
        },
        "pricing_secure": {
            title: "Ceník & Smlouvy (Tajné)",
            icon: "fa-shield-halved",
            highlight: true,
            isSecure: true,
            topics: [
                {
                    name: "Interní mzdové tabulky",
                    steps: [
                        { title: "Utajené složky odměn", text: "Zde se nacházejí neveřejné dokumenty, mzdové tabulky a smlouvy.", images: [] }
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
                    name: "Pravidla pro obaly a stravenky",
                    steps: [
                        { title: "Stravenky", text: "Přehled akceptovaných stravenek a poukázek (elektronické i papírové formy).\n\n🛑 Zásadní pravidlo: Na stravenky se nevrací hotovost.", images: [] },
                        { title: "Vratné obaly", text: "Pravidla pro zpětný odběr a kontrolu stavu zálohovaných lahví, beden a přepravek.", images: [] }
                    ]
                }
            ]
        },
        "car_home": {
            title: "Auto domů",
            icon: "fa-car",
            highlight: false,
            topics: [
                {
                    name: "Podmínky a žádosti",
                    steps: [
                        { title: "Pravidla benefitu", text: "Benefit nepodléhá automatickému schválení – směny musí na sobě navazovat (CD-R, O-R, CD-CD).\n\nŽádost se podává přes Rychlé akce nejpozději do 15:00 ve formátu: interní číslo telefonu, Praha (telefon 895, Košík Praha). Prvních 10 km je zdarma, každý další kilometr je zpoplatněn částkou 7,50 Kč.", images: [] }
                    ]
                }
            ]
        },
        "shifts": {
            title: "Plánování směn",
            icon: "fa-calendar-days",
            highlight: false,
            topics: [
                {
                    name: "Práce s GAIA směnami",
                    steps: [
                        { title: "Rezervace a odstoupení", text: "V sekci Dostupné směny vyfiltrujte zónu (Košík Praha) a klikněte na Žádat – položka se ihned propíše do sekce Moje směny (čeká na schválení).\n\nOdstoupení od směny je možné nejpozději 120 hodin (5 dní) před jejím začátkem (maximálně 4× za měsíc).", images: [] }
                    ]
                }
            ]
        },
        "invoicing": {
            title: "Inkaso & Vkladomaty",
            icon: "fa-file-invoice-dollar",
            highlight: false,
            topics: [
                {
                    name: "Tankování a hotovost",
                    steps: [
                        { title: "Tankování a palivo", text: "Všechna vozidla jezdí na klasickou naftu (diesel) – tankujte vždy do plna a výhradně u čerpacích stanic MOL (PIN MOL karty je 8080).\n\n🛑 Kritické upozornění: Pokud natankujete nesprávné palivo, v žádném případě nestartujte motor a okamžitě kontaktujte dispečink!\n\nVozidlo se odevzdává vždy čisté a s plnou nádrží.", images: [] },
                        { title: "Korekce zpoždění", text: "Žádejte VŽDY až po ukončení celé trasy (nejpozději do druhého dne).\n\nChyba na skladě: Pokud se na skladě cokoliv rozbije nebo chybí a koordinátor jde situaci řešit, nahlaste mu přesný časový údaj, o který se kvůli tomu zpozdíte, aby jej mohl správně uvést do korekce.", images: [] }
                    ]
                }
            ]
        },
        "delivery": { title: "Doručování & Storna", icon: "fa-box-open", highlight: false, topics: [{ name: "Řešení problémů", steps: [{ title: "Storno objednávky", text: "Postup při stornu u zákazníka.", images: [] }] }] },
        "customer": { title: "U zákazníka & Desatero", icon: "fa-door-open", highlight: false, topics: [{ name: "Komunikace", steps: [{ title: "Pravidla chování", text: "Profesionální přístup u dveří.", images: [] }] }] },
        "bonuses": { title: "Bonusy & Odměny", icon: "fa-trophy", highlight: true, topics: [{ name: "Složky odměn", text: "Jak dosáhnout na prémie.", images: [] }] },
        "forms": { title: "Žádosti & Formuláře", icon: "fa-file-pen", highlight: false, topics: [{ name: "Omluvenky", steps: [{ title: "Hlášení absencí", text: "Formuláře pro omluvení.", images: [] }] }] },
        "contacts": { title: "Důležité kontakty", icon: "fa-phone", highlight: false, span: true, topics: [{ name: "Podpora", text: "Kontakty a komunikační kanály najdete ve firemní WhatsApp skupině.", steps: [] }] }
    };
}
let db = getSafeDb();
