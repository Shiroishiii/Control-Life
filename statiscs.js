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
}









