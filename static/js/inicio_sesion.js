function guardarUsuario(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;

    // Guardamos el nombre en localStorage
    localStorage.setItem("usuario", nombre);
    localStorage.setItem("foto", "https://i.pravatar.cc/100"); // foto demo

    // Redirigir al index.html
    window.location.href = "../../index.html";
}

