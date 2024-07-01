document.addEventListener('DOMContentLoaded', (event) => {
  const enviarBtn = document.getElementById('enviarBtn');
  const cancelarBtn = document.getElementById('cancelarBtn');
  const emailForm = document.getElementById('emailForm');
  const searchAssuntoForm = document.getElementById('searchAssuntoForm');

  // Cenário: Enviar
  enviarBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Lógica para envio do email
    console.log('Email enviado:', { email, mensagem });
    alert('Email enviado com sucesso!');
  });

  // Cenário: Cancelar
  cancelarBtn.addEventListener('click', () => {
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
  });

  // Cenário: Buscar por Turma
  emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const turma = document.getElementById('turma').value;
    console.log('Buscando por Turma:', turma);
    alert('Busca por Turma realizada!');
  });

  // Cenário: Buscar por Assunto
  searchAssuntoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const assunto = document.getElementById('assunto').value;
    console.log('Buscando por Assunto:', assunto);
    alert('Busca por Assunto realizada!');
  });
});
