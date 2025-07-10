meuStorage = localStorage;

 const usuarios = {
    nome: '',
    email: '',
    senha: ''
}

function cadastro() {
    usuarios.nome = document.getElementById ('cadNome').value
    usuarios.senha = document.getElementById ('cadSenha').value
    usuarios.email = document.getElementById ('cadEmail').value

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    console.log (usuarios)
    alert ("Cadastrado com sucesso")

    window.location.href = "login.html"
}

function login(){
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarios'));
    const nome = document.getElementById('logNome').value;
    const senha = document.getElementById('logSenha').value;

    if (nome === usuarioSalvo.nome || nome === usuarioSalvo.email && senha === usuarioSalvo.senha){
        alert ("Login efetuado com sucesso!")

        window.location.href = "mainMenu.html"
    }else{
        alert ("Usuario ou senha incorretos!")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarios'));

    if (usuarioSalvo) {
      document.getElementById("perfilNome").textContent = usuarioSalvo.nome;
      document.getElementById("perfilEmail").textContent = usuarioSalvo.email;
    }
  });

  function salvarPerfil(){
    window.location.href = "mainMenu.html"
  }
  function excluirConta(){
    window.location.href = "register.html"
  }