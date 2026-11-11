function getSafeDb() {
    return {
        "gaia_login": {
            title: "Start směny & GAIA",
            icon: "fa-mobile-screen-button",
            highlight: true,
            topics: [
                {
                    name: "1. Časové okno a přihlášení",
                    steps: [
                        { title: "Zahájení a sankce", text: "Přihlásit se můžete nejdřív **30 minut před začátkem** časového okna a nejpozději do začátku směny.\n\n<div class='alert-box'>⚠️ **Pozor na sankce:** Za pozdní přihlášení hrozí pokuta. Nepříchod na směnu je penalizován podle platného ceníku.</div>", images: [] }
                    ]
                },
                {
                    name: "2. Vyzvednutí HW u boxu",
                    steps: [
                        { title: "Postup u boxu", text: "1. Přijdete k boxu, zvolíte možnost **„Převzít HW“** and zadáte své osobní telefonní číslo.\n2. Dorazí vám SMS s číselným kódem, který zadáte do systému boxu. Otevře se schránka (klíček, terminál a firemní telefon).\n3. Zkontrolujte, zda je vše nabité, funkční and zda je terminál správně spárovaný s telefonem. Schránku bezpečně zavřete.", images: [] }
                    ]
                },
                {
                    name: "3. Přesun k vozidlu a parkování",
                    steps: [
                        { title: "Parkování a závora", text: "Přesuňte se na velké parkoviště (případně hledejte na malém).\n\nPokud ještě nemáte své vozidlo v systému závory, zažádejte o přístup prostřednictvím příslušného formuláře (odkaz najdete ve firemní WhatsApp skupině). Do té době parkujte vzadu na malém parkovišti a tuto skutečnost nahlaste teamleaderovi.", images: [] }
                    ]
                },
                {
                    name: "4. Přihlášení do GAIA",
                    steps: [
                        { title: "Spuštění aplikace", text: "Zapněte firemní telefon, zadejte PIN **1234** and spusťte aplikaci **GAIA** (případně webový prohlížeč na iOS).\n\nPřihlaste se svým **vlastním e-mailem** (který jste uváděl ve smlouvě) and **vygenerovaným heslem**.", images: [] }
                    ]
                },
                {
                    name: "5. Spuštění rozvozu",
                    steps: [
                        { title: "Zahájení trasy", text: "V levém horním rohu aplikace GAIA rozklikněte menu and zvolte **„Začít rozvoz“**.\n\nZadejte firemní telefonní číslo (najdete ho v kontaktech v telefonu).\n\nNásledně proveďte povinnou fotodokumentaci vozidla and kontrolu případného poškození.", images: [] }
                    ]
                }
            ]
        },
        "pricing_secure": {
            title: "Ceník & Smlouvy",
            icon: "fa-file-shield",
            highlight: true,
            isSecure: true,
            topics: [
                {
                    name: "Interní dokumenty a sankce",
                    steps: [
                        { 
                            title: "Přehled pokut a smluvních podmínek", 
                            text: "Zde najdete přehled smluvních pokut a pravidel.\n\n<div class='alert-box'>⚠️ **Sankční řád:** Pozdní příchody, neodhlášené směny a nedodržení pravidel hotovosti jsou pokutovány dle platných firemních směrnic.</div>", 
                            images: [] 
                        }
                    ]
                }
            ]
        },
        "vratne_obaly": {
            title: "Stravenky & Obaly",
            icon: "fa-ticket",
            highlight: false,
            topics: [
                {
                    name: "Pravidla pro obaly a stravenky",
                    steps: [
                        { title: "Stravenky", text: "Přehled akceptovaných stravenek a poukázek (elektronické i papírové formy).\n\n<div class='alert-box'>🛑 **Zásadní pravidlo:** Na stravenky se nevrací hotovost.</div>", images: [] },
                        { title: "Vratné obaly", text: "Pravidla pro zpětný odběr a kontrolu stavu zálohovaných lahví, beden a přepravek.", images: [] }
                    ]
                }
            ]
        },
        "cash_management": {
            title: "Hotovost & Vkladomaty",
            icon: "fa-wallet",
            highlight: true,
            topics: [
                {
                    name: "Kurýři bez vkladové karty",
                    steps: [
                        { title: "Limit 10 000 Kč and odevzdání", text: "Pokud máte v hotovosti víc než **10 000 Kč**, máte **12 hodin** na to, abyste je odevzdali správci inkasa. Jejich seznam visí na nástěnce v kurýrní místnosti.\n\nPokud nestihnete odevzdat, hrozí vám **blokace účtu and pokuta dle ceníku**.\n\n<div class='tip-box'>💡 **Tip:** Snažte se peníze odevzdávat po druhém kole, ať se večer nemusíte nahánět. Vždy se řiďte pokyny správce inkasa.</div>", images: [] },
                        { title: "Večerní předání", text: "Večer kolem **20:15** (po uzavření slotů) napíše dispečink do firemního telefonu zprávu, v kolik se přibližně vracejí správci inkasa. Vždy se domluvte dopředu.", images: [] }
                    ]
                },
                {
                    name: "Vkladomaty and pravidlo 168 hodin",
                    steps: [
                        { title: "Vklad do bankomatu", text: "Jednou za 7 dní (168 hodin) musíte jak v hotovosti, tak ve stravenkách klesnout v GAIA pod částku **99 Kč**.\n\nKurýři s kartou mají zákaz dávat peníze správcům (pokud se nedomluvíte jinak). Vkládat můžete jak v **ČSOB**, tak v **České spořitelně**.\n\n📱 **Postup v GAIA:** Menu ➔ Transakce ➔ Přidat transakci ➔ Vklad. Zde zadáte částku and vyfotíte účtenku.\n\n<div class='warning-box'>⚠️ **Pozor:** Účtenku si ponechte do schválení! Pokud vkladomat nevytiskne účtenku, do poznámky v GAIA napište **příjmení, kde and v kolik** jste vklad provedli.</div>", images: [] }
                    ]
                }
            ]
        },
        "bonus_tips": {
            title: "Bonusy & Jak je vylepšit",
            icon: "fa-award",
            highlight: true,
            topics: [
                {
                    name: "Optimalizace metrik",
                    steps: [
                        { title: "1. Klikání and časování", text: "Vždy klikejte v aplikaci podle reálného času. Přejezdy mezi zákazníkem A and B musí trvat **nejméně polovinu času**, který vám dala GAIA.\n\nJakmile potvrdíte příjezd k zákazníkovi, musí uběhnout **aspoň 1 minuta and 14 vteřin** (zákazník se uzavírá platbou). Nejdřív můžete potvrdit příjezd 240 m od adresy zákazníka, jinak příjezd potvrzujte až na místě.", images: [] },
                        { title: "2. Perfect Bag", text: "Při vyndávání tašek z auta překontrolujte, zda není nic rozbitého (vajíčka, smetana, jogurty, dortíky). Křehké věci (jogurty, koblížky) dávejte bezpečně k nohám or doprostřed.", images: [] },
                        { title: "3. Driving Score & Spotřeba", text: "Vyvarujte se prudkého rozjíždění, brzdění and řezání zatáček. Své výsledky uvidíte v sumarizaci or v GAIA ➔ Hodnocení řidiče. Motor zbytečně neprotáčejte do vysokých otáček, jezděte plynule.", images: [] }
                    ]
                }
            ]
        },
        "corrections": {
            title: "Žádosti & Korekce",
            icon: "fa-file-pen",
            highlight: false,
            topics: [
                {
                    name: "Přehled situací and korekcí",
                    steps: [
                        { title: "Zpoždění ze skladu", text: "Jestliže máte náskok 0 min and sklad jde do zpoždění, nepanikařte. Na nakládku najíždějte až ve chvíli, kdy máte pod náskokem zeleně svítící parkovací místo (např. par10, par05). Na toto zpoždění se dělá **automatická korekce**, nic se neposílá.", images: [] },
                        { title: "Poškozené / chybějící zboží na nakládce", text: "Pokud vám něco chybí or je poškozeno, najděte koordinátora nakládky (u televize za parkovištěm č. 5). Nahlaste mu závadu, on vám zboží vymění and nezapomeňte mu nahlásit **počet minut zpoždění** pro korekci.", images: [] },
                        { title: "Návrat ke stornovanému zákazníkovi", text: "Pokud má zákazník slot 10:00–11:00 and vy se k němu vrátíte and odkliknete platbu do 11:00, žádost psát nemusíte. Pokud platbu odkliknete v 11:01, počítá se jako zpožděný zákazník and můžete podat žádost o korekci.", images: [] }
                    ]
                }
            ]
        },
        "delivery": {
            title: "Doručování & Storna",
            icon: "fa-box-open",
            highlight: false,
            topics: [
                {
                    name: "Postup při stornu",
                    steps: [
                        { title: "Podmínky pro stornování", text: "1. Minimálně **2× zavolejte zákazníkovi** v jeho časovém slotu, nechte vyzvánět aspoň **30 vteřin** (mezi hovory 2 min pauza).\n2. Pokud nezvedá, přijeďte na adresu, **potvrďte příjezd** and jděte ke zvonkům.\n3. Pokud zvonek chybí or nikdo nereaguje, můžete provést storno.\n\n<div class='tip-box'>📌 Pro storno **nemusíte** kontaktovat zákaznickou linku or dispečink.</div>", images: [] }
                    ]
                },
                {
                    name: "Kontroly RMF (Rizikoví zákazníci)",
                    steps: [
                        { title: "Postup u RMF zákazníků", text: "RMF jsou zákazníci, kteří často reklamují. Ještě než k nim přijedete, vytáhněte jeho tašky and **nafoťte veškerý obsah tašek + jeden štítek**. Fotky pošlete teamleaderovi přes WhatsApp.\n\n<div class='alert-box'>⚠️ **Přísně tajné:** Zákazník nesmí o kontrole vědět!</div>", images: [] }
                    ]
                }
            ]
        },
        "car_home": {
            title: "Auto domů",
            icon: "fa-car-side",
            highlight: false,
            topics: [
                {
                    name: "Pravidla and žádosti",
                    steps: [
                        { title: "1. Ponechání HW na další den", text: "Pokud máte další den směnu začínající nejpozději v **8:40** and dnes máte odpolední/celodenní směnu, můžete si nechat set HW u sebe.\n\n📱 **Kde zadat:** GAIA ➔ Menu ➔ Rychlé akce ➔ Zapůjčení auta (napište číslo terminálu and region, např. 531, Praha).", images: [] },
                        { title: "2. Cesta domů po posledním zákazníkovi", text: "Podmínky: schválené auto domů do 15:00, odevzdávání po 22:00, v autě žádné zboží.\n\n📱 **Postup:** GAIA ➔ Menu ➔ Rychlé akce ➔ Ostatní ➔ vybrat **Vysoká urgence** ➔ do poznámky napsat **„Domů“**.", images: [] }
                    ]
                }
            ]
        },
        "contacts": {
            title: "Kde najít kontakty",
            icon: "fa-address-book",
            highlight: false,
            span: true,
            topics: [
                {
                    name: "Kam volat and proč",
                    steps: [
                        { title: "Přehled oddělení", text: "Kontakty and komunikační kanály najdete ve firemním telefonu or na WhatsAppu:\n\n• **HR:** Nábor, smlouvy.\n• **Fleet:** Vozový park, nehody, technika aut.\n• **Dispečink:** Operativní řešení tras, akutní problémy v terénu.\n• **Zákaznická linka:** Podpora pro komunikaci se zákazníky.", images: [] }
                    ]
                }
            ]
        }
    };
}
