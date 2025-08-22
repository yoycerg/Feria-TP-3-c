
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


window.onload = function () {
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

// Mapa de la granja
let map = L.map('map').setView([-33.537704, -70.636150], 13);

// Añadir capa base (mapa)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Mapa &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
}).addTo(map);

// Lista de parques con coordenadas y descripción
let parques = [
    { nombre: "Parque la Bandera", coords: [-33.542904, -70.637241], },
    { nombre: "Parque Quita Normal", coords: [-33.441402, -70.681110], },
    { nombre: "Cerro Santa Lucía", coords: [-33.440112, -70.644314], },
    { nombre: "Parque Metropolitano", coords: [-33.424575, -70.633018], },
    { nombre: "Parque O´Higgins", coords: [-33.462302, -70.659117], },
];

// Crear marcadores en el mapa
parques.forEach(function (parque) {
    L.marker(parque.coords)
        .addTo(map)
        .bindPopup("<b>" + parque.nombre + "</b><br>" + parque.desc);
});

