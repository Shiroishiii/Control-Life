function mostrarCards() {
    const habitos = JSON.parse(localStorage.getItem("habitos")) || []
    console.log(habitos)

    // document.getElementById("CardsContainer").innerHTML += '' 
    document.getElementById("CardsContainer").innerHTML = '' 
    
    for (let i = 0; i < habitos.length; i++) {
        document.getElementById("CardsContainer").innerHTML += `
            <div class="Card">  
                <div class="flex-linha">
                    <h3>${habitos[i].NomeDoHábito}</h3>
                    <div>
                        <button class="editores" onclick="excluir(${i})">
                            <img src="imgs/game-icons--trash-can (1).svg" alt="Excluir">
                        </button>

                        <button class="editores" onclick="editar(${i})">
                            <img src="game-icons--pencil.svg" alt="Editar">
                        </button>
                    </div>
                </div>
                <p>Descrição: ${habitos[i].Descrição}</p>
                <p>Meta: ${habitos[i].Meta}</p>
                <p>Notas: ${habitos[i].Notas}</p>
            </div>
        `
    }
}

function excluir(index) {
    const confirmar = confirm("Tem certeza que deseja excluir este hábito?")

    if (confirmar) {
        const habitos = JSON.parse(localStorage.getItem("habitos")) || []
        habitos.splice(index, 1) // Remove o item do array pelo indice
        localStorage.setItem("habitos", JSON.stringify(habitos)) // Atualiza o localStorage
        mostrarCards() // Atualiza a lista de cards na tela
        window.location.reload();
    }
}




function adicionarNovoHabito(){
    window.location.href = "addhabitis.html"
}




// mostrar os cards ao carregar
mostrarCards()