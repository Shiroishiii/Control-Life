inicializar()

let usuario = {
    username: '',
    email: '',
    password: ''
}
function cadastrar() {
    usuario.nome = document.getElementById('cadNome').value
    usuario.email = document.getElementById('cadEmail').value
    usuario.senha = document.getElementById('cadSenha').value
    alert("Cadastrado com sucesso!! :D")

    console.log(usuario)

    window.location.href = login.html
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

