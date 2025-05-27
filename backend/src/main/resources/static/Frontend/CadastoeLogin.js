// Função para cadastrar usuário
function cadastrarUsuario() {
  const formData = new FormData(document.querySelector('#formCadastro'));

  const data = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    senha: formData.get('senha'),
    tipoUsuario: formData.get('tipoUsuario'),
    funcao: formData.get('funcao'),
    grupoPermissao: formData.get('grupoPermissao')
  };

  fetch('http://localhost:8080/cadastro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'login.html';
    } else {
      alert('Erro ao cadastrar!');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}

// Função para login
function logarUsuario() {
  const formData = new FormData(document.querySelector('#formLogin'));

  const loginData = {
    email: formData.get('email'),
    senha: formData.get('senha')
  };

  fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
  .then(response => {
    if (response.ok) {
      alert('Login realizado com sucesso!');
      window.location.href = 'inicio.html';
    } else {
      alert('Email ou senha incorretos!');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}