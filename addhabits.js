const userSelectedSugHabit = localStorage.getItem('suggested-habit-selected');
if (userSelectedSugHabit) {
    const input = document.getElementById("habit-name");
    if (input) {
      input.value = userSelectedSugHabit;
      localStorage.removeItem('suggested-habit-selected');
    }
}

function gethabitosDoUserAtual(){
  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
  if(!usuario){
    alert("Você precisa estar logado!");
    window.location.href = 'login.html';
    return [];
  }

  const chave = `habitos_${usuario.email.replace(/[@.]/g, '_')}`;
  const habitos = JSON.parse(localStorage.getItem(chave));
  return habitos || [];
}

function salvarHabitoDoUserAtual(habitos){
  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
  if(!usuario) return;

  const chave = `habitos_${usuario.email.replace(/[@.]/g, '_')}`;
  localStorage.setItem(chave, JSON.stringify(habitos));
}

function addHabit() {
  let nomeHab = document.getElementById("habit-name").value.trim();
  let descHab = document.getElementById("habit-description").value.trim();
  let metaHab = Number(document.getElementById("habit-goal").value.trim());
  let notasHab = document.getElementById("habit-notes").value.trim();
  let corHab = document.getElementById("habit-color").value.trim();

  if (nomeHab === "" || descHab === "" || !metaHab || notasHab === "" || corHab === "") {
    alert('Por favor, preencha todos os campos!');
    return; 
  }

  const usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
  if(!usuario){
    alert("Você precisa estar logado!");
    window.location.href = 'login.html';
    return;
  } 

  const habitos = gethabitosDoUserAtual();

  const habit = {
    usuario: usuario.email,
    nomeDoHabito: nomeHab,
    descricao: descHab,
    meta: metaHab,
    notas: notasHab,
    percentualConclusao: 0,
    progresso: 0,
    id: Date.now(),
    cor: corHab,
  };

  habitos.push(habit);
  salvarHabitoDoUserAtual(habitos);
  atualizarDadosGrafico();
  window.location.href = "habits.html";
}

function addSuggestedHabit(habit) {
    localStorage.setItem("suggested-habit-selected", habit);
    window.location.href = "addhabits.html";
}

function MeusHábitos(){
  window.location.href = "MeusHabitos.html";
}

function atualizarDadosGrafico(){
  const habitos = gethabitosDoUserAtual();
  const nomeDoHabito = [];
  const percentualConclusao = [];
  const cor = [];

  for(let i = 0; i < habitos.length; i++){
    nomeDoHabito.push(habitos[i].nomeDoHabito);
    percentualConclusao.push(habitos[i].percentualConclusao);
    cor.push(habitos[i].cor);
  }

  localStorage.setItem('nomeDoHabito', JSON.stringify(nomeDoHabito));
  localStorage.setItem('percentualConclusao', JSON.stringify(percentualConclusao));
  localStorage.setItem('cor', JSON.stringify(cor));

  console.log(habitos, nomeDoHabito, percentualConclusao, cor);
}

function telaAdicionar(){
  window.location.href = "addhabits.html"
}

