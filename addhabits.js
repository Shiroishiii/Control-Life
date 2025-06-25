const userSelectedSugHabit = localStorage.getItem('suggested-habit-selected')
if(userSelectedSugHabit){
    input = document.getElementById("habit-name")
    input.value = userSelectedSugHabit
    localStorage.removeItem('suggested-habit-selected')
}

function addHabit(){
    let nomehabito = document.getElementById().value
    // todos os inputs


     }


    const habito= {
        nomehabito: nomehabito,
        // todos os campos
    }




function addSuggestedHabit(habit){
    localStorage.setItem("suggested-habit-selected", habit)
    window.location.href = "addhabits.html"
}


function MeusHábitos(){
    

}