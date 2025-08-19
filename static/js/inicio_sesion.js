  function guardarUsuario(e) {
      e.preventDefault();
      let nombre = document.getElementById("nombre").value;

      // Guardamos el nombre en localStorage
      localStorage.setItem("usuario", nombre);
      localStorage.setItem("foto", "../images/foto_sin_perfil.jpg"); // foto demo

      // Redirigir al index.html
      window.location.href = "../index.html";
    }