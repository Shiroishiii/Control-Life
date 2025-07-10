
const inputFoto = document.getElementById('fotoPerfil');
const imgPreview = document.getElementById('preview');

// Mostrar imagem salva no localStorage ao abrir a página
const imagemSalva = localStorage.getItem('fotoPerfil');
if (imagemSalva) {
  imgPreview.src = imagemSalva;
}

// Quando o usuário selecionar uma nova imagem
inputFoto.addEventListener('change', function () {
  const arquivo = inputFoto.files[0];

  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function () {
      const base64 = leitor.result;
      localStorage.setItem('fotoPerfil', base64); // Salva imagem
      imgPreview.src = base64; // Atualiza preview
    };

    leitor.readAsDataURL(arquivo); // Converte para base64
  }
});
const botaoEditar = document.getElementById('iconEditar');

botaoEditar.addEventListener('click', function () {
  inputFoto.click(); // simula o clique no input de imagem
});


