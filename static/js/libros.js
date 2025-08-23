
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

function mostrarUsuario() {
    let nombre = localStorage.getItem("usuario");
    let foto = localStorage.getItem("foto");

    if (nombre && foto) {
        // Mostrar datos en el área del usuario
        let userArea = document.getElementById("user-area");
        if (userArea) {
            userArea.innerHTML = `
        <img src="${foto}" class="profile-pic" alt="Foto de perfil">
        <span>${nombre}</span>
        <button class="cerrar-btn" onclick="cerrarSesion()">Cerrar Sesión</button>
      `;
        }

        // Mostrar/ocultar secciones si existen
        let caja = document.getElementById("caja-1");
        if (caja) caja.style.display = "flex";

        let title = document.getElementById("title-body");
        if (title) title.style.display = "flex";

        let info = document.getElementById("informacion");
        if (info) info.style.display = "none";
    } else {
        // Si no hay sesión, ocultamos secciones
        let caja = document.getElementById("caja-1");
        if (caja) caja.style.display = "none";

        let title = document.getElementById("title-body");
        if (title) title.style.display = "none";
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("foto");
    location.reload();
}

// Ejecutar al cargar la página
window.onload = function () {
    mostrarUsuario();
};
    


function elDiario() {
window.open("../pdfs/El diario de Ana Frank - Anne Frank.pdf");


}





function elHobbit() {

    window.open("../pdfs/El Hobbit .pdf");

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



function elArteFelicidad() {

    window.open("../pdfs/Dalai Lama - El arte de la felicidad.pdf")



}
function elPoder() {
    window.open("../pdfs/El poder del ahora - Eckhart Tolle.pdf", "_blank");
}


function pensarbien() {
    window.open("../pdfs/penbiensenbien.pdf")


}
function elSol() {
    window.open("../pdfs/El sol y sus flores - Rupi Kaur.pdf", "_blank");
}