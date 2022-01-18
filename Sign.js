document.getElementById("signb").addEventListener("click",function(){
    document.getElementById("popup").style.display="flex"
})

document.getElementById("sign_upb").addEventListener("click",function(event){
event.preventDefault()
document.getElementById("popup").style.display="none"
document.getElementById("pops").style.display="flex"
})