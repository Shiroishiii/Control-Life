let contador = 0
if(localStorage.getItem("contador")){ //Verifica se ja existe algum valor salvo
    contador = parseInt(localStorage.getItem("contador")) //parseInt converte de string para numero
}
// document.getElementById("contador").textContent = contador //textContent serve para alterar o texto dentro de um elemento HTML
const habitos = JSON.parse(localStorage.getItem('habitos'))

function add(id){
    console.log(id)
    for( let i = 0; i < habitos.length; i++){
        if(habitos[i].id == id){
            habitos[i].progresso++
            habitos[i].percentualConclusao = (habitos[i].progresso/ habitos[i].meta) * 100
            // console.log(habitos[i])
        }
        // console.log(habitos[i].progresso)
        document.getElementById(habitos[i].id).innerHTML = `progresso: ${habitos[i].progresso}`
    }
    atualizarDadosGrafico()
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
    atualizarDadosGrafico()
}

function mostrarCards(){
    const habitos = JSON.parse(localStorage.getItem("habitos")) || []
    console.log (habitos)

    document.getElementById("CardsContainer").innerHTML = ''
    for (let i=0; i < habitos.length; i++){ 
        document.getElementById("CardsContainer").innerHTML +=`
        <div class="card">
        <div class="flex-linha">
                    <h3>${habitos[i].nomeDoHabito}</h3>
                    <div>
                        <button class="editores" onclick="excluir(${i})">
                            <img src="imgs/game-icons--trash-can (1).svg" alt="Excluir">
                        </button>

                        <button class="editores" onclick="editar(${i})">
                            <img src="game-icons--pencil.svg" alt="Editar">
                        </button>
                    </div>
                </div>
            <p>Descrição : ${habitos[i].descricao}</p>
            <p>Meta : ${habitos[i].meta}</p>
            <p>Notas : ${habitos[i].notas}</p>
            <button onclick="add(${habitos[i].id})">+</button>
            <p id="${habitos[i].id}">progresso: ${habitos[i].progresso}</p>
        </div>
        `
    }
}


function atualizarDadosGrafico(){

    const habitos = JSON.parse(localStorage.getItem('habitos')) || []
    const nomeDoHabito = []
    const percentualConclusao =  []
    const cor =  []
  
    for(let i = 0; i<habitos.length; i++){
      nomeDoHabito.push(habitos[i].nomeDoHabito)
      percentualConclusao.push(habitos[i].percentualConclusao)
      cor.push(habitos[i].cor)
    }
  
    localStorage.setItem('nomeDoHabito',JSON.stringify(nomeDoHabito))
    localStorage.setItem('percentualConclusao',JSON.stringify(percentualConclusao))
    localStorage.setItem('cor',JSON.stringify(cor))
    
  
    
    console.log(habitos, nomeDoHabito, percentualConclusao, cor) 
  }



function excluir(index) {
    const confirmar = confirm("Tem certeza que deseja excluir este hábito?")

    if (confirmar) {
        const habitos = JSON.parse(localStorage.getItem("habitos")) || []
        habitos.splice(index, 1) // Remove o item do array pelo indice
        localStorage.setItem("habitos", JSON.stringify(habitos)) // Atualiza o localStorage
        mostrarCards() // Atualiza a lista de cards na tela
        atualizarDadosGrafico()
    }
}


function adicionarNovoHabito(){
    window.location.href = "addhabitis.html"
}

// mostrar os cards ao carregar
mostrarCards()
