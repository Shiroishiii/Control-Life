
const inputFoto = document.getElementById('fotoPerfil');
const imgPreview = document.getElementById('preview');
const perfilNome = document.getElementById('perfilNome')
const perfilEmail = document.getElementById('perfilEmail')

const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'))


if (!usuarioAtual){
  alert ("Você precisa estar logado!")
  window.location.href = 'login.html'
}

const imagemSalva = localStorage.getItem('fotoPerfil');
if (imagemSalva) {
  imgPreview.src = imagemSalva;
}else{
  perfilNome.textContent = usuarioAtual.nome || 'Usuário'
  perfilEmail.textContent = usuarioAtual.email || 'Email não definfido'
}


inputFoto.addEventListener('change', function () {
  const arquivo = inputFoto.files[0];

  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function () {
      const base64 = leitor.result;
      localStorage.setItem('fotoPerfil', base64);
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

    localStorage.removeItem('usuarioAtual')
    localStorage.removeItem('fotoPerfil')

    alert("Conta excluída")
    window.location.href = "login.html"
  }
}