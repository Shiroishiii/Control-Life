
function botarImafem(){
var file = document.getElementById("inImg")
var img = document.getElementById("image")
file.addEventListener("change",(e)=>{
    img.src = URL.createObjectURL(e.target.files[0])
})
