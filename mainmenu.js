function gethabitosDoUserAtual() {
  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'))
  if (!usuario) {
    alert("Você precisa estar logado!")
    window.location.href = 'login.html'
    return []
  }

  const chave = `habitos_${usuario.email.replace(/[@.]/g, '_')}`
  const habitos = JSON.parse(localStorage.getItem(chave))
  return habitos || []
}

function salvarHabitoDoUserAtual(habitos) {
  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'))
  if (!usuario) return

  const chave = `habitos_${usuario.email.replace(/[@.]/g, '_')}`
  localStorage.setItem(chave, JSON.stringify(habitos))
}

let contador = 0
if (localStorage.getItem("contador")) {
  contador = parseInt(localStorage.getItem("contador"))
}

function add(id) {
  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'))
  let habitos = gethabitosDoUserAtual()

  for (let i = 0; i < habitos.length; i++) {
    if (habitos[i].id == id) {
      habitos[i].progresso++
      habitos[i].percentualConclusao = (habitos[i].progresso / habitos[i].meta) * 100
      contador++ // Incrementa contador
    }

    const idElemento = `${habitos[i].id}_${usuario.email.replace(/[@.]/g, '_')}`
    const el = document.getElementById(idElemento)
    if (el) {
      el.innerHTML = `progresso: ${habitos[i].progresso}`
    }
  }

  salvarHabitoDoUserAtual(habitos)
  atualizarDadosGrafico()
  atualizarContador()
  location.reload()
}

function atualizarContador() {
  localStorage.setItem("contador", contador)
  atualizarDadosGrafico()
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


function adicionarNovoHabito() {
  window.location.href = "addhabits.html"
}

// Mostrar os cards ao carregar

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

function atualizarGrafico() {
  const habitos = gethabitosDoUserAtual();

  const nomeDoHabito = habitos.map(h => h.nomeDoHabito);
  const percentualConclusao = habitos.map(h => h.percentualConclusao);
  const cor = habitos.map(h => h.cor);

  meuGrafico.data.labels = nomeDoHabito;
  meuGrafico.data.datasets[0].data = percentualConclusao;
  meuGrafico.data.datasets[0].backgroundColor = cor;

  meuGrafico.update();
}
        
atualizarDadosGrafico()