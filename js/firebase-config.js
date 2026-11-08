// Konfigurace Firebase - DOPLŇ SVÉ ÚDAJE Z FIREBASE CONSOLE
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

let firestoreDb = null;

try {
    if (firebaseConfig.apiKey && typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        firestoreDb = firebase.firestore();
        console.log("Firebase úspěšně připojen.");
    } else {
        console.warn("Firebase klíče nejsou vyplněny. Aplikace běží v lokálním režimu.");
    }
} catch (e) {
    console.error("Chyba inicializace Firebase:", e);
}

// Bezpečná sanitizace textu proti XSS útokům
function sanitizeText(str) {
    if (!str) return "";
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
