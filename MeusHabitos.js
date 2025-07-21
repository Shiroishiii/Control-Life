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
}

function atualizarContador() {
  document.getElementById("contador").textContent = contador
  localStorage.setItem("contador", contador)
  atualizarDadosGrafico()
}

function mostrarCards(){
  const habitos = gethabitosDoUserAtual(); // só hábitos do usuário logado
  const container = document.getElementById("CardsContainer");
  container.innerHTML = ''; // limpa antes

  if(habitos.length === 0){
    container.innerHTML = '<p>Você ainda não tem hábitos cadastrados.</p>';
    return;
  }

  for(let i = 0; i < habitos.length; i++){
    const usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
    const idElemento = `${habitos[i].id}_${usuario.email.replace(/[@.]/g, '_')}`;
    
    container.innerHTML += `
      <div class="card">
        <div class="flex-linha">
          <h3>${habitos[i].nomeDoHabito}</h3>
          <div>
            <button class="editores" onclick="excluir(${habitos[i].id})">
              <img src="imgs/game-icons--trash-can (1).svg" alt="Excluir">
            </button>
            <button class="editores" onclick="editar(${habitos[i].id})">
              <img src="game-icons--pencil.svg" alt="Editar">
            </button>
          </div>
        </div>
        <p>Descrição : ${habitos[i].descricao}</p>
        <p>Meta : ${habitos[i].meta}</p>
        <p>Notas : ${habitos[i].notas}</p>
        <button id="diasFeitos" onclick="add(${habitos[i].id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg></button>
        <p id="${idElemento}">progresso: ${habitos[i].progresso}</p>
      </div>
    `;
  }
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

function editar(id){
    let habitos = gethabitosDoUserAtual()
    const habito = habitos.find (h => h.id === id)

    if(!habito){
      alert ("Hábito não encontrado")
      return
    }

    const novoNome = prompt("Novo nome do hábito:", habito.nomeDoHabito)
    if(novoNome === null){
      return
    }

    const novaDescricao = prompt("Novo descrição:", habito.descricao)
    if(novaDescricao === null){
      return
    }

    const novaMeta = prompt("Nova meta:", habito.meta)
    if(novaMeta === null || isNaN(parseInt(novaMeta))) return alert("Meta inválida")

    const novasNotas = prompt("Nova Nota:", habito.notas)
    if(novasNotas === null){
      return
    }

    habito.nomeDoHabito = novoNome
    habito.descricao = novaDescricao
    habito.meta = parseInt(novaMeta)
    habito.notas = novasNotas
    habito.percentualConclusao = (habito.progresso / habito.meta * 100)

    salvarHabitoDoUserAtual(habitos)
    mostrarCards()
    atualizarDadosGrafico()
}


function excluir(id) {
  let habitos = gethabitosDoUserAtual()
  const confirmar = confirm("Tem certeza que deseja excluir este hábito?")

  if (confirmar) {
    habitos = habitos.filter(h => h.id !== id)
    salvarHabitoDoUserAtual(habitos)
    mostrarCards()
    atualizarDadosGrafico()
  }
}

function adicionarNovoHabito() {
  window.location.href = "addhabits.html"
}

// Mostrar os cards ao carregar
mostrarCards()
atualizarDadosGrafico()
