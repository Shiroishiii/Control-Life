let contador = 0
if(localStorage.getItem("contador")){ //Verifica se ja existe algum valor salvo
    contador = parseInt(localStorage.getItem("contador")) //parseInt converte de string para numero
}
document.getElementById("contador").textContent = contador //textContent serve para alterar o texto dentro de um elemento HTML
const habitos = JSON.parse(localStorage.getItem('habitos'))

function add(id){
    // console.log(id)
    for( let i = 0; i < habitos.length; i++){
        if(habitos[i].id == id){
            habitos[i].progresso++
            habitos[i].percentualConclusao = (progresso/meta) * 100
        }
        console.log(habitos[i].progresso)
        document.getElementById(habitos[i].id).innerHTML = `progresso: ${habitos[i].progresso}`
    }
localStorage.setItem('habitos',JSON.stringify(habitos))
    // encontrar o hábito que tem esse id
    // habitos[i].id == id
    // progresso++


    // contador++
    // atualizarContador()
}
function atualizarContador(){
    document.getElementById("contador").textContent = contador
    localStorage.setItem("contador", contador)
}
function mostrarCards(){
    const habitos = JSON.parse(localStorage.getItem("habitos")) || []
    console.log (habitos)
    
 
    document.getElementById("CardsContainer").innerHTML +=''
    for(let i=0; i < habitos.length; i++){
        document.getElementById("CardsContainer").innerHTML +=`
        <div class="card">
            <h3>${habitos[i].NomeDoHábito}</h3>
            <p>Descrição : ${habitos[i].Descrição}</p>
            <p>Meta : ${habitos[i].Meta}</p>
            <p>Notas : ${habitos[i].Notas}</p>
            <button onclick="add(${habitos[i].id})">+</button>
            <p id="${habitos[i].id}">progresso: ${habitos[i].progresso}</p>
            
        </div>
        `

}
}

mostrarCards()



// document.getElementById('diasfeitos').value
// document.getElementById('metadias').value
// console.log(diasfeitos)
// const porcentagem = ('diasfeitos'/'metadias') *100
// console.log(porcentagem)



