const login = () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const emailPreenchido = document.getElementById("email").value;
  const senhaPreenchida = document.getElementById("password").value;

  const usuarioExiste = usuarios.find(
    (user) => user.email === emailPreenchido && user.senha === senhaPreenchida
  );

  if (!usuarioExiste) {
    alert("Falha no login! Usuário inexistente!");
    return false;
  } else {
    JSON.stringify();
    const usuarioExisteJson = JSON.stringify(usuarioExiste, null, 2);
    sessionStorage.setItem("usuario_ativo", usuarioExisteJson);

    //redirect
    window.open("cursos.html", "_self");
    return true;
  }
};
