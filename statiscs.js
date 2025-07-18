let meuGrafico

function atualizarDadosGrafico(){

    const habitos = JSON.parse(localStorage.getItem('habitos')) || []
    const nomeDoHabito = habitos.map (h => h.nomeDoHabito)
    const percentualConclusao = habitos.map(h => h.percentualConclusao || 0)
    const cor = habitos.map (h => h.cor || '#aaa')

  if(meuGrafico){
    meuGrafico.data.labels = nomeDoHabito
    meuGrafico.data.datasets[0].data = percentualConclusao
    meuGrafico.data.datasets[0].backgroundColor = cor
    meuGrafico.update()
  }
}









