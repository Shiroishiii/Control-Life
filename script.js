meuStorage = localStorage;

 const usuarios = {
    nome: '',
    email: '',
    senha: ''
}

function cadastro() {
    usuarios.nome = document.getElementById ('cadNome').value
    usuarios.senha = document.getElementById ('cadSenha').value
    usuarios.email = document.getElementById ('cadEmail').value

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    console.log (usuarios)
    alert ("Cadastrado com sucesso")

    window.location.href = "login.html"
}

function login(){
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarios'));
    const nome = document.getElementById('logNome').value;
    const senha = document.getElementById('logSenha').value;

    if (nome === usuarioSalvo.nome || nome === usuarioSalvo.email && senha === usuarioSalvo.senha){
        alert ("Login efetuado com sucesso!")

        window.location.href = "mainMenu.html"
    }else{
        alert ("Usuario ou senha incorretos!")
    }
}


function addHabit() {
    const habitName = document.getElementById('habit-name').value;
    const habitDescription = document.getElementById('habit-description').value;

    if (habitName && habitDescription) {
        const habits = JSON.parse(localStorage.getItem('habits')) || [];
        habits.push({ name: habitName, description: habitDescription });
        localStorage.setItem('habits', JSON.stringify(habits));
        alert("Hábito adicionado com sucesso!");
        document.getElementById('habit-form').reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}