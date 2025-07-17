let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

function cadastro() {
  let nome = document.getElementById("cadNome").value
  let email = document.getElementById("cadEmail").value
  let senha = document.getElementById("cadSenha").value

  if (nome && email && senha) {
    let usuario = {
      nome: nome,
      email: email,
      senha: senha
    }

    usuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    alert("Cadastro realizado com sucesso!")
    window.location.href = "login.html"
  } else {
    alert("Por favor, preencha todos os campos.")
  }
}

function login() {
  let nome = document.getElementById("logNome").value
  let senha = document.getElementById("logSenha").value

  let usuarioEncontrado = usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha)
  if (usuarioEncontrado) {
    alert("Login realizado com sucesso!")
    window.location.href = "mainMenu.html"
  } else {
    alert("Usuário ou senha incorretos.")
  }
