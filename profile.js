
const inputFoto = document.getElementById('fotoPerfil');
const imgPreview = document.getElementById('preview');


const imagemSalva = localStorage.getItem('fotoPerfil');
if (imagemSalva) {
  imgPreview.src = imagemSalva;
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

