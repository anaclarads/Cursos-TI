const cadastraUsuario = () => {
  const nome = document.getElementById("text").value;
  const email = document.getElementById("email").value;
  const nascimento = document.getElementById("data").value;
  const telefone = document.getElementById("phone").value;
  const senha = document.getElementById("password").value;
  const senha_confirmacao = document.getElementById("password_confirm").value;

  const dados = {
    nome,
    email,
    nascimento,
    telefone,
    senha,
    senha_confirmacao,
  };

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  if (emailJaCadastrado(email)) {
    alert("E-mail já cadastrado, insira outro!");
    document.getElementById("email").value = "";
    document.getElementById("email").focus();
  } else {
    if (!usuarios) {
      const dadoParaInserir = JSON.stringify([dados], null, 2);
      localStorage.setItem("usuarios", dadoParaInserir);
    } else {
      usuarios.push(dados);
      const dadoParaInserir = JSON.stringify(usuarios, null, 2);
      localStorage.setItem("usuarios", dadoParaInserir);

      //redirect
      window.open("index.html", "_self");
    }
  }
};

const emailJaCadastrado = (emailParaVerificar) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  if (!usuarios) return false;
  else {
    const result = usuarios.find((user) => user.email === emailParaVerificar);
    if (!result) return false;
    else return true;
  }
};
