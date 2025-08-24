
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


// Mapa de la granja
let map = L.map('map').setView([-33.537704, -70.636150], 13);

// Añadir capa base (mapa)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Mapa &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
}).addTo(map);

// Lista de parques con coordenadas y descripción
let parques = [
    { nombre: "Parque la Bandera", coords: [-33.542904, -70.637241], desc: "Parque ideal para pasear y relajarte"  },
    { nombre: "Parque Quita Normal", coords: [-33.441402, -70.681110], desc: "Museos para pasar el  tiempo y y areas verdes historicas" },
    { nombre: "Cerro Santa Lucía", coords: [-33.440112, -70.644314], desc: "Un cerro para ver vista espectaculares y relajarte" },
    { nombre: "Parque Metropolitano", coords: [-33.424575, -70.633018], desc:"El parque mas grande de santiago, para leer libro y escuchar musica" },
    { nombre: "Parque O´Higgins", coords: [-33.462302, -70.659117], desc:"Sede de eventos culturales y espacios de recreación" },
];

// Crear marcadores en el mapa
parques.forEach(function (parque) {
    L.marker(parque.coords)
        .addTo(map)
        .bindPopup("<b>" + parque.nombre + "</b><br>" + parque.desc);
});

