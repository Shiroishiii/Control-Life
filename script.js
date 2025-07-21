let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

function gethabitosDoUserAtual() {
  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'))
  if (!usuario) {
<<<<<<< HEAD
    // alert("Você precisa estar logado!")
=======
    alert("Você precisa estar logado!")
>>>>>>> 491b983558afc0e58f926538f3fe8e072e2c8a5d
    // window.location.href = 'login.html'
    return []
  }

  const chave = `habitos_${usuario.email.replace(/[@.]/g, '_')}`
  const habitos = JSON.parse(localStorage.getItem(chave))
  return habitos || []
}

function atualizarDadosGrafico() {
  const habitos = gethabitosDoUserAtual();
  const nomeDoHabito = [];
  const percentualConclusao = [];
  const cor = [];

  habitos.forEach(h => {
    nomeDoHabito.push(h.nomeDoHabito);
    percentualConclusao.push(h.percentualConclusao);
    cor.push(h.cor);
  });

  localStorage.setItem('nomeDoHabito', JSON.stringify(nomeDoHabito));
  localStorage.setItem('percentualConclusao', JSON.stringify(percentualConclusao));
  localStorage.setItem('cor', JSON.stringify(cor));
}

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
    localStorage.setItem("usuarioAtual", JSON.stringify(usuarioEncontrado)) 
    alert("Login realizado com sucesso!")
    atualizarDadosGrafico()
    window.location.href = "mainMenu.html"
  } else {
    alert("Usuário ou senha incorretos.")
  }
}
