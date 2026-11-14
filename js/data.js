function getSafeDb() {
    return {
        "gaia_login": {
            title: "Start směny & GAIA",
            icon: "fa-mobile-screen-button",
            topics: [
                {
                    name: "Převzetí HW a auta",
                    steps: [
                        { title: "Zahájení a převzetí", text: "Ráno po příjezdu na malé parkoviště najdete velký fialový box. Na jeho obrazovce zadejte své osobní telefonní číslo, na které vám obratem přijde číselný kód. Ten opíšete na obrazovku boxu.\n\nPo správném zapsání kódu se otevře schránka s vybavením (klíček, terminál a firemní telefon).\n\n<div class='warning-box'>⚠️ **Pozor:** Ihned zkontrolujte, zda je hardware nabitý, plně funkční a bez poškození. Pokud narazíte na jakýkoliv problém, okamžitě kontaktujte dispečink.</div>", images: [] }
                    ]
                },
                {
                    name: "Přihlášení do GAIA",
                    steps: [
                        { title: "Spuštění a přihlášení", text: "Zapněte firemní telefon bočním tlačítkem a zadejte **PIN: 1234**.\n\nPo spuštění telefonu otevřete aplikaci **GAIA**. Zadejte svůj e-mail (uvedený ve smlouvě) a své heslo.\n\n<div class='tip-box'>💡 **Tip pro první přihlášení:** Při prvním spuštění musíte zvolit možnost „Zapomenuté heslo“ a vygenerovat si nové heslo, se kterým se budete nadále přihlašovat.</div>\n\nV levém horním rohu klepněte na tři čárky (menu) a zvolte možnost **Začít rozvoz** (případně zahájení okna).", images: [] }
                    ]
                },
                {
                    name: "Kontrola auta",
                    steps: [
                        { title: "Hledání a kontrola vozu", text: "Po převzetí věcí se přesuňte na velké parkoviště se závorou (pokud vozidlo nenajdete tam, zkontrolujte ještě malé parkoviště). Pomocí tlačítka pro otevření/zavření vozu na klíčku sledujte blikání blikačů, abyste vůz snadno našli.\n\nJakmile vůz objevíte, přeparkujte ho na větší a dobře osvětlené místo.\n\nAplikace po vás bude vyžadovat zadání firemního telefonního čísla (najdete ho v kontaktech ve firemním telefonu; pokud by chybělo, vyžádejte si soubor s kontakty od teamleadera nebo dispečera).\n\nNásledně musíte přes vyhledávání zvolit **přesnou SPZ** svého vozidla.\n\nDalším krokem je povinná fotodokumentace vozidla podle pokynů v aplikaci (nejprve pohled pod úhlem 90°, poté 45°).\n\n<div class='warning-box'>⚠️ **Doporučení k focení:** Pro pořízení kvalitních a ostrých fotek doporučujeme použít vlastní telefon. V případě horších světelných podmínek si na vůz posviťte baterkou. Na fotografii musí být vidět celé vozidlo.</div>\n\nDůkladně vyfoťte také palubní desku v GAIA. Pokud svítí kontrolka motoru, klíček nebo jakákoliv jiná chybová hláška, nahlaste to do WhatsApp skupiny **Fleet – Nová poškození**.\n\n<div class='alert-box'>🚨 **Upozornění:** Pokud ráno při přejímání vozu nebo HW narazíte na jakýkoliv problém, ihned kontaktujte dispečink.</div>", images: [] }
                    ]
                },
                {
                    name: "Výjezd na trasu",
                    steps: [
                        { title: "Zahájení rozvozu", text: "Jakmile se úspěšně přihlásíte na směnu, vyčkáte na přiřazení trasy. Na sklad můžete zajíždět až ve chvíli, kdy máte v aplikaci zeleně svítící parkovací místo (například `par10`).", images: [] }
                    ]
                }
            ]
        },
        "pricing_secure": {
            title: "Ceník & Smlouvy",
            icon: "fa-file-shield",
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
            topics: [
                {
                    name: "Stravenky a limity",
                    steps: [
                        { title: "Pravidla pro stravenky", text: "Přehled akceptovaných stravenek a poukázek (elektronické i papírové formy).\n\n<div class='alert-box'>🛑 **Zásadní pravidlo:** Na stravenky se nevrací hotovost. Respektujte maximální povolené limity na jeden nákup dle platných pravidel.</div>", images: [] }
                    ]
                },
                {
                    name: "Vratné obaly",
                    steps: [
                        { title: "Zpětný odběr lahví a beden", text: "U PET lahví a plechovek značky Mattoni je nutné zkontrolovat, zda je na obalu explicitně uvedeno logo **Košík**. Pokud tam není nebo je obal poškozený, takový obal nepřebíráme.\n\n**Sodastream bombičky:** Vydávají se přísně systémem **kus za kus**. Pokud má zákazník připravené 2 plné bombičky, ale předá vám jen 1 prázdnou, vy mu předáte pouze 1 plnou a druhou musíte v nákupu řádně odečíst.\n\n<div class='tip-box'>💡 **Tip pro ověření:** Pokud si nejste jistí, zda určitý obal bereme, otevřete si v aplikaci GAIA cestu ➔ *Menu -> Dokumenty*, kde najdete kompletní dokumentaci k vratným obalům i stravenkám.</div>", images: [] }
                    ]
                }
            ]
        },
        "cash_management": {
            title: "Hotovost & Vkladomaty",
            icon: "fa-wallet",
            topics: [
                {
                    name: "Hotovost / Vkladomaty",
                    steps: [
                        { title: "Pravidla pro hotovost", text: "Pokud máte v hotovosti více než **10 000 Kč**, máte maximálně **12 hodin** na to, abyste klesli pod tento limit. Pokud limit nestihnete vyrovnat, hrozí vám zablokace účtu a smluvní pokuta dle ceníku.\n\nJednou za **168 hodin** (7 dní) od překročení musíte svou peněženku v GAIA vyrovnat pod **99 Kč**.\n\n<div class='tip-box'>💡 **Pravidlo pro vklady:** Pokud máte služební vkladovou kartu, musíte hotovost vkládat do bankomatu. Výběrčí inkasa vám hotovost nesmí převzít (pokud se předem domluvíte jinak).</div>", images: [] }
                    ]
                },
                {
                    name: "Seznam vkladových bankomatů v Praze",
                    steps: [
                        { 
                            title: "Česká spořitelna & ČSOB", 
                            text: "Seznam ověřených vkladových bankomatů v Praze (řazeno od Prahy 1 nahoru). Kliknutím na adresu se vám otevře mapa:\n\n" +
                                 "📍 **Praha 1:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Rytířská+536%2F29,+Praha+1' target='_blank'>Česká spořitelna, Rytířská 536/29</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Václavské+náměstí+802%2F56,+Praha+1' target='_blank'>Česká spořitelna, Václavské náměstí 802/56</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Na+Příkopě+860%2F24,+Praha+1' target='_blank'>ČSOB, Na Příkopě 860/24</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Národní+973%2F41,+Praha+1' target='_blank'>ČSOB, Národní 973/41</a>\n\n" +
                                 "📍 **Praha 2:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Bělehradská+299%2F132,+Praha+2' target='_blank'>Česká spořitelna, Bělehradská 299/132</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Vinohradská+1894%2F46,+Praha+2' target='_blank'>Česká spořitelna, Vinohradská 1894/46</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Jugoslávská+620%2F29,+Praha+2' target='_blank'>ČSOB, Jugoslávská 620/29</a>\n\n" +
                                 "📍 **Praha 3:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Jičínská+2605%2F16,+Praha+3' target='_blank'>Česká spořitelna, Jičínská 2605/16 (OC Atrium Flora)</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Olšanská+2643%2F1a,+Praha+3' target='_blank'>ČSOB, Olšanská 2643/1a</a>\n\n" +
                                 "📍 **Praha 4:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Budějovická+1912%2F1b,+Praha+4' target='_blank'>Česká spořitelna, Budějovická 1912/1b (OC DBK)</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Na+Pankráci+86,+Praha+4' target='_blank'>Česká spořitelna, Arkády Pankrác, Na Pankráci 86</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Roškotova+1717%2F2,+Praha+4' target='_blank'>ČSOB, Roškotova 1717/2</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Chodovská+2288%2F7,+Praha+4' target='_blank'>ČSOB, Chodovská 2288/7</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Roztylská+2321%2F19,+Praha+4' target='_blank'>Česká spořitelna, Roztylská 2321/19 (OC Westfield Chodov)</a>\n\n" +
                                 "📍 **Praha 5:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Plzeňská+8,+Praha+5' target='_blank'>Česká spořitelna, Plzeňská 8/348 (OC Nový Smíchov)</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Radlická+333%2F150,+Praha+5' target='_blank'>ČSOB, Radlická 333/150</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Štefánikova+216%2F24,+Praha+5' target='_blank'>Česká spořitelna, Štefánikova 216/24</a>\n\n" +
                                 "📍 **Praha 6:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Evropská+846%2F176a,+Praha+6' target='_blank'>Česká spořitelna, Evropská 846/176a</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Vítězné+náměstí+829%2F2,+Praha+6' target='_blank'>ČSOB, Vítězné náměstí 829/2</a>\n\n" +
                                 "📍 **Praha 7:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Dělnická+213%2F12,+Praha+7' target='_blank'>Česká spořitelna, Dělnická 213/12</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Ortenovo+náměstí+36%2F16,+Praha+7' target='_blank'>ČSOB, Ortenovo náměstí 36/16</a>\n\n" +
                                 "📍 **Praha 8:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Českomoravská+2420%2F15,+Praha+8' target='_blank'>Česká spořitelna, Českomoravská 2420/15 (OC Harfa)</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Sokolovská+668%2F136,+Praha+8' target='_blank'>ČSOB, Sokolovská 668/136</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Klapkova+790%2F34,+Praha+8' target='_blank'>Česká spořitelna, Klapkova 790/34</a>\n\n" +
                                 "📍 **Praha 9:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Vysočanská+539,+Praha+9' target='_blank'>Česká spořitelna, Vysočanská 539 (OC Fénix)</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Veselská+663,+Praha+9' target='_blank'>ČSOB, Veselská 663 (OC Letňany)</a>\n\n" +
                                 "📍 **Praha 10:**\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Černokostelecká+1620%2F11,+Praha+10' target='_blank'>Česká spořitelna, Černokostelecká 1620/11</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Skandinávská+327%2F3,+Praha+10' target='_blank'>Česká spořitelna, Skandinávská 327/3 (OC Futurum)</a>\n" +
                                 "• <a href='https://mapy.cz/zakladni?q=Vršovická+1527%2F68b,+Praha+10' target='_blank'>ČSOB, Vršovická 1527/68b (OC Eden)</a>", 
                            images: [] 
                        }
                    ]
                }
            ]
        },
        "bonus_tips": {
            title: "Bonusy & Jak je vylepšit",
            icon: "fa-award",
            topics: [
                {
                    name: "Optimalizace metrik",
                    steps: [
                        { title: "1. Klikání a časování", text: "Vždy klikejte v aplikaci podle reálného času. Přejezdy mezi zákazníkem A a B musí trvat **nejméně polovinu času**, který vám dala GAIA.\n\nJakmile potvrdíte příjezd k zákazníkovi, musí uběhnout **aspoň 1 minuta a 14 vteřin** (zákazník se uzavírá platbou). Nejdřív můžete potvrdit příjezd 240 m od adresy zákazníka, jinak příjezd potvrzujte až na místě.", images: [] },
                        { title: "2. Perfect Bag", text: "Při vyndávání tašek z auta překontrolujte, zda není nic rozbitého (vajíčka, smetana, jogurty, dortíky). Křehké věci (jogurty, koblížky) dávejte bezpečně k nohám nebo doprostřed.", images: [] },
                        { title: "3. Driving Score & Spotřeba", text: "Vyvarujte se prudkého rozjíždění, brzdění a řezání zatáček. Své výsledky uvidíte v sumarizaci nebo v GAIA ➔ Hodnocení řidiče. Motor zbytečně neprotáčejte do vysokých otáček, jezděte plynule.", images: [] }
                    ]
                }
            ]
        },
        "corrections": {
            title: "Žádosti & Korekce",
            icon: "fa-file-pen",
            topics: [
                {
                    name: "Přehled situací a korekcí",
                    steps: [
                        { title: "Zpoždění ze skladu", text: "Jestliže máte náskok 0 min a sklad jde do zpoždění, nepanikařte. Na nakládku najíždějte až ve chvíli, kdy máte pod náskokem zeleně svítící parkovací místo (například `par10`). Na toto zpoždění se dělá **automatická korekce**, nic se neposílá.", images: [] },
                        { 
                            title: "Hotová trasa a zpoždění na skladě", 
                            text: "Pokud dostanete hotovou nebo opožděnou trasu s nakládkou za 10 minut, ale cesta na sklad vám trvá například 20 minut, můžete po příjezdu požádat o korekci zpoždění.\n\n<div class='alert-box'>⚠️ **Důležité pravidlo:** Nesmíte ale na trase nabrat větší zpoždění, než byl původní čas, kdy jste na sklad reálně najížděli (respektujte časový polštář).</div>", 
                            images: [] 
                        },
                        { title: "Poškozené nebo chybějící zboží na nakládce", text: "Pokud vám něco chybí nebo je poškozeno, najděte koordinátora nakládky (u televize za parkovištěm č. 5). Nahlaste mu závadu, on vám zboží vymění a nezapomeňte mu nahlásit **počet minut zpoždění** pro korekci.", images: [] },
                        { title: "Návrat ke stornovanému zákazníkovi", text: "Pokud má zákazník slot 10:00–11:00 a vy se k němu vrátíte a odkliknete platbu do 11:00, žádost psát nemusíte. Pokud platbu odkliknete v 11:01, počítá se jako zpožděný zákazník a můžete podat žádost o korekci.", images: [] }
                    ]
                }
            ]
        },
        "delivery": {
            title: "Doručování & Storna",
            icon: "fa-box-open",
            topics: [
                {
                    name: "Postup při stornu",
                    steps: [
                        { title: "Podmínky pro stornování", text: "1. Minimálně **2× zavolejte zákazníkovi** v jeho časovém slotu, nechte vyzvánět aspoň **30 vteřin** (mezi hovory 2 min pauza).\n2. Pokud nezvedá, přijeďte na adresu, **potvrďte příjezd** a jděte ke zvonkům.\n3. Pokud zvonek chybí nebo nikdo nereaguje, můžete provést storno.\n\n<div class='tip-box'>📌 Pro storno **nemusíte** kontaktovat zákaznickou linku ani dispečink.</div>", images: [] }
                    ]
                },
                {
                    name: "Kontroly RMF (Rizikoví zákazníci)",
                    steps: [
                        { title: "Postup u RMF zákazníků", text: "RMF jsou zákazníci, kteří často reklamují. Ještě než k nim přijedete, vytáhněte jeho tašky a **nafoťte veškerý obsah tašek + jeden štítek**. Fotky pošlete teamleaderovi přes WhatsApp.\n\n<div class='alert-box'>⚠️ **Přísně tajné:** Zákazník nesmí o kontrole vědět!</div>", images: [] }
                    ]
                }
            ]
        },
        "car_home": {
            title: "Auto domů",
            icon: "fa-car-side",
            topics: [
                {
                    name: "Pravidla a žádosti",
                    steps: [
                        { title: "1. Ponechání HW na další den", text: "Pokud máte další den směnu začínající nejpozději v **8:40** a dnes máte odpolední nebo celodenní směnu, můžete si nechat set HW u sebe.\n\n📱 **Kde zadat:** GAIA ➔ Menu ➔ Rychlé akce ➔ Zapůjčení auta (napište číslo terminálu a region, např. 531, Praha).", images: [] },
                        { title: "2. Cesta domů po posledním zákazníkovi", text: "Podmínky: schválené auto domů do 15:00, odevzdávání po 22:00, v autě žádné zboží.\n\n📱 **Postup:** GAIA ➔ Menu ➔ Rychlé akce ➔ Ostatní ➔ vybrat **Vysoká urgence** ➔ do poznámky napsat **„Domů“**.", images: [] }
                    ]
                }
            ]
        },
        "contacts": {
            title: "Kde najít kontakty",
            icon: "fa-address-book",
            span: true,
            topics: [
                {
                    name: "Kam volat a proč",
                    steps: [
                        { title: "Přehled oddělení", text: "Kontakty a komunikační kanály najdete ve firemním telefonu nebo na WhatsAppu:\n\n• **HR:** Nábor, smlouvy.\n• **Fleet:** Vozový park, nehody, technika aut.\n• **Dispečink:** Operativní řešení tras, akutní problémy v terénu.\n• **Zákaznická linka:** Podpora pro komunikaci se zákazníky.", images: [] }
                    ]
                }
            ]
        }
    };
}
