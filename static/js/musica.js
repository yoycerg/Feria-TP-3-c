
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


window.onload = function() {
    let nombre = localStorage.getItem("nombre");
    let foto = localStorage.getItem("foto");

    if (nombre && foto) {
        document.getElementById("user-area").innerHTML = `
            <img src="${foto}" class="profile-pic" alt="Foto de perfil">
            <span>${nombre}</span>
            <button class="logout-btn" onclick="cerrarSesion()">Cerrar Sesión</button>
        `;
    }
}

function cerrarSesion() {
    localStorage.clear();
    window.location.href = "index.html";
}

