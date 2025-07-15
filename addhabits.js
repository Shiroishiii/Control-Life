const userSelectedSugHabit = localStorage.getItem('suggested-habit-selected')
if (userSelectedSugHabit) {
    input = document.getElementById("habit-name")
    input.value = (userSelectedSugHabit)
    localStorage.removeItem('suggested-habit-selected')
}
const habitos = JSON.parse(localStorage.getItem('habitos')) || []

function Adicionar() {
    window.location.href = "addhabits.html"
    // localStorage.BeberAgua = "Beber Água"
}


function addHabit() {
  let nomeHab = document.getElementById("habit-name").value.trim();
  let descHab = document.getElementById("habit-description").value.trim();
  let metaHab = document.getElementById("habit-goal").value.trim();
  let notasHab = document.getElementById("habit-notes").value.trim();
  let corHab = document.getElementById("habit-color").value.trim();

  // Verificação de campos vazios
  if (nomeHab === "" || descHab === "" || metaHab === "" || notasHab === "" || corHab === "") {
    alert('Por favor, preencha todos os campos!');
    return; 
  } else {
    const habit = {
      usuario: "Informações do usuário logado", 
      NomeDoHábito: nomeHab,
      Descrição: descHab,
      Meta: metaHab,
      Notas: notasHab,
      Cor: corHab,
    };

    habitos.push(habit);
    console.log(habitos);

    // Salvando no localStorage
    localStorage.setItem("habitos", JSON.stringify(habitos));

    // Redirecionando para a página de hábitos
    window.location.href = "habits.html";
  }
}



function addSuggestedHabit(habit) {
    localStorage.setItem("suggested-habit-selected", habit)
    window.location.href = "addhabits.html"
}

function MeusHábitos(){
 window.location.href="MeusHabitos.html"
}

