document.getElementById("signb").addEventListener("click",function(){
    document.getElementById("popup").style.display="flex"
})

document.getElementById("sign_upb").addEventListener("click",function(event){
event.preventDefault()
document.getElementById("popup").style.display="none"
document.getElementById("pops").style.display="flex"
})


document.getElementById("sign_b").addEventListener("click",function(event){
    event.preventDefault()
    document.getElementById("popup").style.display="flex"
    document.getElementById("pops").style.display="none"
    })