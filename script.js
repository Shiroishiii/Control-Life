let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

function gethabitosDoUserAtual() {
  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'))
  if (!usuario) {
    alert("Você precisa estar logado!")
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

window.onload = function() {
  const habitos = gethabitosDoUserAtual();
  const container = document.getElementById("cardsNaOutraPagina");
  // container.innerHTML = '';

  if (habitos.length === 0) {
    container.innerHTML = '<p>Você ainda não tem hábitos cadastrados.</p>';
    return;
  }

  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'));

  for (let i = 0; i < habitos.length; i++) {
    const idElemento = `${habitos[i].id}_${usuario.email.replace(/[@.]/g, '_')}`;

    container.innerHTML += `
      <div class="card">
        <div class="flex-linha">
          <h3>${habitos[i].nomeDoHabito}</h3>
          <div>
        <button id="diasFeitos" onclick="add(${habitos[i].id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffffff" viewBox="0 0 256 256">
            <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
          </svg>
        </button>
        <p id="${idElemento}">progresso: ${habitos[i].progresso}</p>
        </div>
        `;
      }
    }

atualizarDadosGrafico()

