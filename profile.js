
const inputFoto = document.getElementById('fotoPerfil');
const imgPreview = document.getElementById('preview');
const perfilNome = document.getElementById('perfilNome')
const perfilEmail = document.getElementById('perfilEmail')

const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'))


if (!usuarioAtual){
  alert ("Você precisa estar logado!")
  window.location.href = 'login.html'
}

const chaveFoto = `fotoPerfil_${usuarioAtual.email.replace(/[@.]/g, '_')}`
const imagemSalva = localStorage.getItem(chaveFoto)

perfilNome.textContent = usuarioAtual.nome || 'Usuário'
perfilEmail.textContent = usuarioAtual.email || 'Email não definfido'

if (imagemSalva) {
  imgPreview.src = imagemSalva;
}

inputFoto.addEventListener('change', function () {
  const arquivo = inputFoto.files[0];

  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function () {
      const base64 = leitor.result;
      localStorage.setItem(chaveFoto, base64);
      imgPreview.src = base64; 
    };

    leitor.readAsDataURL(arquivo); 
  }
});
const botaoEditar = document.getElementById('iconEditar');

botaoEditar.addEventListener('click', function () {
  inputFoto.click(); 
});

function excluirConta(){
  const confirmar = confirm("Tem certeza que deseja excluir a conta?")

  if(confirmar){
    const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'))
    let usuarios = JSON.parse(localStorage.getItem('usuarios'))
    usuarios = usuarios.filter(u => u.email !== usuarioAtual.email)

    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    const chaveHabitos = `habitos_${usuarioAtual.email.replace(/[@.]/g, '_')}`
    localStorage.removeItem(chaveHabitos)
    localStorage.removeItem(chaveFoto)

    localStorage.removeItem('usuarioAtual')
    alert("Conta excluída")
    window.location.href = "login.html"
  }
}