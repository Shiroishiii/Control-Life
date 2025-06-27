function fotoPerfilPreview(){

   const inputFotoPerfil = document.getElementById ('fotoPerfil')
   const uploadPerfil = document.getElementById ('uploadPerfil')

   uploadPerfil.addEventListener ('click', () => {
        inputFotoPerfil.click()
   })

   inputFotoPerfil.addEventListener('change', function(event) {
    const arquivo = event.target.files[0]
    if (!arquivo) return
    const reader = new FileReader()

    reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result
    }

    reader.readAsDataURL(arquivo)
    })
}
fotoPerfilPreview()