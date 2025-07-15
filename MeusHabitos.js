function mostrarCards(){
    const habitos = JSON.parse(localStorage.getItem("habitos")) || []
    console.log (habitos)

    document.getElementById("CardsContainer").innerHTML +=''
    for(let i=0; i < habitos.length; i++){
        document.getElementById("CardsContainer").innerHTML +=`
        <div id="Card">
            <h3>${habitos[i].NomeDoHábito}</h3>
            <p>Descrição : ${habitos[i].Descrição}</p>
            <p>Meta : ${habitos[i].Meta}</p>
            <p>Notas : ${habitos[i].Notas}</p>
    
        </div>
        `

    }

}

mostrarCards()