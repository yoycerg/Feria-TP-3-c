
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

function elDiario() {
    // Abre el PDF en otra pestaña
    window.open("../pdfs/El diario de Ana Frank - Anne Frank.pdf", "_blank");
}

function laVidaDePi() {

    // Abre el PDF en otra pestaña
    window.open("../pdfs/La vida de Pi - Yann Martel.pdf ", "_blank");
}


function habitosAtomicos() {
    window.open("../pdfs/Habitos atomicos - James Clear.pdf", "_blank");


}

function elPrincipito() {

    window.open("../pdfs/El principito - Antoine de Saint-Exupery.pdf", "_blank");
}

function elPoder() {
    window.open("../pdfs/El poder del ahora - Eckhart Tolle.pdf", "_blank");
}

function elSol() {
    window.open("../pdfs/El sol y sus flores - Rupi Kaur.pdf", "_blank");
}