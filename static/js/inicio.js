
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


function hablarIA() {
  let visor = document.getElementById("hablarIA");
  visor.src = "../../pages/chatIA.html"; // Ruta de tu PDF
  visor.style.display = "block"; // Mostrar el iframe
}






function irInicioSesion() {
  window.location.href = "pages/inicio_sesion.html";

}


function mostrarUsuario() {
  let nombre = localStorage.getItem("usuario");
  let foto = localStorage.getItem("foto");

  if (nombre && foto) {
    document.getElementById("user-area").innerHTML = `
          <img src="${foto}" class="profile-pic" alt="Foto de perfil">
          <span>${nombre}</span>
          <button onclick="cerrarSesion()">Cerrar Sesión</button>
        `;
  }
}

function cerrarSesion() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("foto");
  location.reload();
}

window.onload = mostrarUsuario;