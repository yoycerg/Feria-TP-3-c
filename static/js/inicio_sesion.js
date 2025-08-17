    function mostrarUsuario() {
      let nombre = localStorage.getItem("usuario");
      let foto = localStorage.getItem("foto");

      if (nombre && foto) {
        document.getElementById("user-area").innerHTML = `
          <img src="${foto}" class="profile-pic" alt="Foto de perfil">
          <span>${nombre}</span>
       
        `;
      }
    }

