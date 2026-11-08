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
                id: "inv-3",
                name: "🗺️ Seznam vkladových bankomatů (Praha)",
                steps: [{
                    title: "Vkladomaty seřazené od Prahy 1 (kliknutím spustíte navigaci)",
                    text: "🟢 ČSOB: Praha 1 – Na Poříčí 1046/24 (24/7)\n🟢 ČSOB: Praha 1 – Václavské nám. 791/32 (24/7)\n🟢 ČSOB: Praha 1 – Spálená 2121/22 OC Quadrio (9-21)\n🟢 ČSOB: Praha 4 – Roztylská 2321/19 OC Chodov (9-21)\n🟢 ČSOB: Praha 5 – Rozvadovská sp. 299 OC Zličín (9-21)\n🟢 ČSOB: Praha 9 – Chlumecká 765/6 OC Černý Most (9-21)\n🟢 ČSOB: Praha 10 – Vršovická 1527/68b OC Eden (9-21)\n\n🔵 ČS: Praha 1 – Rytířská 536/29 (24/7)\n🔵 ČS: Praha 1 – Na příkopě 584/29 (24/7)\n🔵 ČS: Praha 1 – Václavské náměstí 799/48 (24/7)\n🔵 ČS: Praha 4 – Arkalycká 758/2 OC Chodov (9-21)\n🔵 ČS: Praha 5 – Plzeňská 8 OC Nový Smíchov (9-21)\n🔵 ČS: Praha 9 – Českomoravská 2420/15 Harfa (9-21)",
                    images: [],
                    imgLayout: "grid"
                }]
            }
        ]
    },
    customer: {
        title: "🚪 U zákazníka & Desatero",
        topics: [{
            id: "c-1",
            name: "🌟 Oficiální kurýrní Desatero",
            steps: [{
                title: "10 základních pravidel",
                text: "1. Slušný a ohleduplný řidič.\n2. Milý a ochotný za všech okolností.\n3. Řídím se dle poznámky.\n4. Pozdravím a zeptám se, kam nákup složit.\n5. Kontrola tašek a vratných obalů.\n6. Požádám o platbu, poděkuji za spropitné.\n7. U nerudného zákazníka zachovám klid.\n8. Při zpoždění se omluvím.\n9. Vadné zboží řeším náhradou nebo odkazem na linku.\n10. 18+ a občanka: kontrola platného plastového dokladu.",
                images: ["podklady/1000076569.jpg"],
                imgLayout: "grid"
            }]
        }]
    },
    contacts: {
        title: "📞 Důležité kontakty",
        topics: [{
            id: "cnt-1",
            name: "👤 Vedení, Fleet & Dispečink",
            steps: [{
                title: "Telefonní seznam",
                text: "• Team Leader (volání): 227 080 940\n• Team Leader (WhatsApp): 725 081 856\n• Fleet - Švarc Michal: 724 390 808\n• Fleet - Fiala Jiří: 725 447 145\n• Zákaznická linka: 226 220 501\n• Dispečink: 253 253 556",
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
