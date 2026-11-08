const defaultDb = {
    gaia_login: {
        title: "📲 Start směny & GAIA",
        topics: [
            {
                id: "g-1",
                name: "1. Příjezd na Pragorent & Fialový HW box",
                steps: [{
                    title: "Vyzvednutí hardware",
                    text: "• Přihlásit se můžete nejdříve 30 minut před začátkem časového okna.\n• Na Pragorentu zamiřte k fialovému boxu na malém parkovišti u kurýrní místnosti.\n• Stiskněte 'Převzít HW', zadejte telefonní číslo a 6místný kód z SMS.\n• Pokud HW není v pořádku, ihned kontaktujte dispečink!",
                    images: ["podklady/1000076571.jpg"],
                    imgLayout: "grid"
                }]
            },
            {
                id: "g-2",
                name: "2. Kontrola palubní desky & Damage karta",
                steps: [{
                    title: "Nové pravidlo: Snímek přístrojové desky",
                    text: "• Motor musí být zapnutý s naběhlými systémy a všechny dveře zavřené.\n• Hlídáme: servisní klíč, kontrolku motoru, oleje a info o údržbě.\n• POZOR: Nestačí jen vyfotit do GAIY, je nutné informovat Fleet ve WhatsApp skupině HOPO Fleet - nová poškození na vozidle!",
                    images: ["podklady/1000076573.jpg"],
                    imgLayout: "grid"
                }]
            }
        ]
    },
    car_home: {
        title: "🚗 Auto domů",
        topics: [{
            id: "ch-1",
            name: "Podmínky pro zapůjčení vozu přes noc",
            steps: [{
                title: "Pravidla odjezdu domů z trasy",
                text: "• Vůz si lze vzít domů po předchozí domluvě a splnění podmínek pro končení trasy po 22:00.\n• Auto musí být bezpečně zaparkované, uzamčené a bez poškození.\n• Ráno je nutné dorazit včas na depo nebo na domluvené místo nakládky.",
                images: [],
                imgLayout: "grid"
            }]
        }]
    },
    shifts: {
        title: "📅 Plánování směn & Semafor",
        topics: [{
            id: "sh-1",
            name: "Výběr směn, rušení & Semafor",
            steps: [{
                title: "Pravidlo 120 hodin & Semafor směn",
                text: "• Směny si vybíráte přímo v aplikaci GAIA.\n• Zrušení směny bez sankce je možné nejpozději 120 hodin před jejím začátkem.\n• Aktuální vytíženost a potřebu kurýrů sledujte v tabulce Semafor směn.",
                images: [],
                imgLayout: "grid"
            }]
        }]
    },
    invoicing: {
        title: "🧾 Inkaso & Vkladové bankomaty",
        topics: [
            {
                id: "inv-1",
                name: "💳 Kurýři S vkladovou kartou",
                steps: [{
                    title: "Vkládání přes vkladové bankomaty",
                    text: "• Hotovost vkládáte sami přes vkladový bankomat. Je zakázáno odevzdávat ji správcům.\n• Lístek z bankomatu vyfoťte a zadejte do GAIY (Transakce -> Přidat transakci).",
                    images: ["podklady/1000076391.jpg"],
                    imgLayout: "grid"
                }]
            },
            {
                id: "inv-2",
                name: "💵 Kurýři BEZ vkladové karty",
                steps: [{
                    title: "Odevzdání hotovosti správcům",
                    text: "• Pokud nemáte vkladovou kartu, odevzdáváte hotovost správcům na depu.\n• Hlídejte si limit hotovosti (12 000 Kč) a pravidla pro příjem stravenek.",
                    images: [],
                    imgLayout: "grid"
                }]
            },
            {
                id: "inv-3",
                name: "🗺️ Seznam vkladových bankomatů (Praha)",
                steps: [{
                    title: "Vkladomaty seřazené od Prahy 1",
                    text: "🟢 ČSOB: Praha 1 – Na Poříčí 1046/24 (24/7)\n🟢 ČSOB: Praha 1 – Václavské nám. 791/32 (24/7)\n🟢 ČSOB: Praha 1 – Spálená 2121/22 OC Quadrio (9-21)\n🟢 ČSOB: Praha 4 – Roztylská 2321/19 OC Chodov (9-21)\n🟢 ČSOB: Praha 5 – Rozvadovská sp. 299 OC Zličín (9-21)\n🟢 ČSOB: Praha 9 – Chlumecká 765/6 OC Černý Most (9-21)\n🟢 ČSOB: Praha 10 – Vršovická 1527/68b OC Eden (9-21)\n\n🔵 ČS: Praha 1 – Rytířská 536/29 (24/7)\n🔵 ČS: Praha 1 – Na příkopě 584/29 (24/7)\n🔵 ČS: Praha 1 – Václavské náměstí 799/48 (24/7)\n🔵 ČS: Praha 4 – Arkalycká 758/2 OC Chodov (9-21)\n🔵 ČS: Praha 5 – Plzeňská 8 OC Nový Smíchov (9-21)\n🔵 ČS: Praha 9 – Českomoravská 2420/15 Harfa (9-21)",
                    images: [],
                    imgLayout: "grid"
                }]
            }
        ]
    },
    delivery: {
        title: "📦 Doručování & Storna",
        topics: [{
            id: "del-1",
            name: "4krokový postup před stornem & RMF",
            steps: [{
                title: "Povinný postup při nedoručení",
                text: "1. Dvakrát zavolejte zákazníkovi (každé volání min. 20 sekund).\n2. Počkejte 2 minuty.\n3. Zazvoňte na zvonek.\n4. Teprve poté kontaktujte dispečink pro schválení storna.\n• Vždy provádějte kontrolu nákupů (RMF) a při sněhové kalamitě dbejte na zvýšenou opatrnost.",
                images: [],
                imgLayout: "grid"
            }]
        }]
    },
    customer: {
        title: "🚪 U zákazníka & Desatero",
        topics: [{
            id: "c-1",
            name: "🌟 Oficiální kurýrní Desatero & 18+",
            steps: [{
                title: "10 základních pravidel",
                text: "1. Slušný a ohleduplný řidič.\n2. Milý a ochotný za všech okolností.\n3. Řídím se dle poznámky.\n4. Pozdravím a zeptám se, kam nákup složit.\n5. Kontrola tašek a vratných obalů.\n6. Požádám o platbu, poděkuji za spropitné.\n7. U nerudného zákazníka zachovám klid.\n8. Při zpoždění se omluvím.\n9. Vadné zboží řeším náhradou nebo odkazem na linku.\n10. 18+ a občanka: kontrola platného plastového dokladu.",
                images: ["podklady/1000076569.jpg"],
                imgLayout: "grid"
            }]
        }]
    },
    bonuses: {
        title: "🏆 Bonusy & Jak je vylepšit",
        topics: [{
            id: "bon-1",
            name: "Jak maximalizovat své odměny",
            steps: [{
                title: "Tipy pro lepší Courier Scoring",
                text: "• Včasnost (On-Time): Plánujte si trasu a klikněte v GAIY přesně v momentě doručení.\n• Driving Score: Plynulá jízda bez prudkého brzdění a zrychlování šetří auto i zvyšuje skóre.\n• Hodnocení zákazníků (Perfect Delivery): Úsměv, slušné chování a dodržení poznámky v objednávce dělají nejvíc.\n• Minimum storen: Vždy dodržte 4krokový postup před stornem.",
                images: [],
                imgLayout: "grid"
            }]
        }]
    },
    forms: {
        title: "📝 Žádosti & Formuláře",
        topics: [{
            id: "frm-1",
            name: "Korekce zpoždění trasy",
            steps: [{
                title: "Kdy a jak žádat o korekci",
                text: "• Pokud dojde ke zpoždění na trase nezaviněnému kurýrem (dopravní nehoda, čekání na nakládce apod.), vyplňte příslušný formulář pro korekci zpoždění.\n• Všechny aktuální formuláře najdete v oficiálních skupinách nebo přes svého Team Leadera.",
                images: [],
                imgLayout: "grid"
            }]
        }]
    },
    contacts: {
        title: "📞 Kde najít kontakty",
        topics: [{
            id: "cnt-1",
            name: "Oficiální kontakty (GAIA, Firemní telefon, WhatsApp)",
            steps: [{
                title: "Bezpečné vyhledání kontaktů",
                text: "• Z důvodu ochrany osobních údajů a firemních pravidel zde nejsou uvedena přímá telefonní čísla.\n• Všechny oficiální kontakty na Team Leadery, dispečink a Fleet najdete přímo ve své služební aplikaci GAIA, v kontaktech firemního telefonu nebo v oficiálních WhatsApp skupinách Košík.cz.",
                images: [],
                imgLayout: "grid"
            }]
        }]
    }
};

function getSafeDb() {
    try {
        const saved = localStorage.getItem('guid_db_custom');
        return saved ? JSON.parse(saved) : defaultDb;
    } catch (e) {
        return defaultDb;
    }
}
