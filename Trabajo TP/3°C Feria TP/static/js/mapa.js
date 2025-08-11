
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

// Mapa de la granja
let map = L.map('map').setView([-33.537704, -70.636150], 13);

// Añadir capa base (mapa)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Mapa &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
}).addTo(map);

// Lista de parques con coordenadas y descripción
let parques = [
    { nombre: "Parque la Bandera", coords: [-33.542904, -70.637241], desc: "El pulmón verde más grande de Santiago." },

];

// Crear marcadores en el mapa
parques.forEach(function (parque) {
    L.marker(parque.coords)
        .addTo(map)
        .bindPopup("<b>" + parque.nombre + "</b><br>" + parque.desc);
});

