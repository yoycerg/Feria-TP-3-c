
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const isOpen = menu.style.left === "0px";

    if (isOpen) {
        menu.style.left = "-260px";
        overlay.style.display = "none";
    } else {
        menu.style.left = "0px";
        overlay.style.display = "block";
    }
}

// ----- Idiomas -----
const languageSelect = document.getElementById("languageSelect");

// Traducciones
const translations = {
    es: {
        "config-title": "Configuración",
        "dark-mode": "Modo Oscuro:",
        "language": "Idioma:"
    },
    en: {
        "config-title": "Settings",
        "dark-mode": "Dark Mode:",
        "language": "Language:"
    }
};

languageSelect.addEventListener("change", function () {
    const selectedLang = languageSelect.value;
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[selectedLang][key];
    });
});
