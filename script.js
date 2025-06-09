inicializar()




let usuario = {
    username: '',
    email: '',
    password: ''
}
function cadastrar() {
    usuario.nome = document.getElementById('Cnome').value
    usuario.email = document.getElementById('Cemail').value
    usuario.senha = document.getElementById('Csenha').value
    alert("Cadastrado com sucesso!! :D")

    console.log(usuario)

    mostrarLogin()

}

function logar() {
    let nome = document.getElementById('Lnome').value
    let senha = document.getElementById('Lsenha').value

    if ((nome === usuario.nome || nome === usuario.email) && senha === usuario.senha) {
        alert("Login efetuado com sucesso!")
        limparInputs()
        mostrarProdutos()
        // document.getElementById('navbar').style.display = 'block'
    } else {
        alert("Login não efetuado sem sucesso!")
    }
}

function mostrarCadastro() {
    esconderBotoes()
    document.getElementById('Cadastro').style.display = 'flex'
    document.getElementById('Cnome').focus()
}





function inicializar() {
    mostrarCadastro()
}

