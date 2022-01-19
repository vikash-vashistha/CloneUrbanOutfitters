
let checr=JSON.parse(localStorage.getItem("checkiacc"))
if(checr>0){
    document.getElementById("myacc").textContent="My Account"
}

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
document.getElementById("clo_divf").addEventListener("click",function(event){
        event.preventDefault()
        document.getElementById("popup").style.display="none"
        
        })
document.getElementById("clo_divs").addEventListener("click",function(event){
        event.preventDefault()
        document.getElementById("pops").style.display="none"
        
        })
        var mainarr=JSON.parse(localStorage.getItem("mainsignup"))||[];
        var  c=0;
        document.getElementById("creacc").addEventListener("click",function(event){
          event.preventDefault();
          let emails=document.getElementById("signup_mail").value;
          let passcode=document.getElementById("sineup_pass").value;
          if(emails==""||passcode==""){
              alert("fields are empty")
          }else{
for(let i=0;i<mainarr.length;i++){
    if(mainarr[i].mails==emails){
        console.log("yes")
        c++
    }
}
if(c>0){
    c=0
    alert("Account alresy exit")
    
}else{
    datas={
        mails:emails,
        passc:passcode
    }
    mainarr.push(datas);
    localStorage.setItem("mainsignup",JSON.stringify(mainarr))
    document.getElementById("popup").style.display="none"
    document.getElementById("pops").style.display="none"
    document.getElementById("thirdp").style.display="flex"
}
          }
        })
        document.getElementById("sipok").addEventListener("click",function(event){
            console.log("naveen")
            event.preventDefault();
            document.getElementById("thirdp").style.display="none"
            document.getElementById("pops").style.display="none"
            document.getElementById("popup").style.display="none"
            
        })
        var d=0;
        var namec=[]
        var checkarr=JSON.parse(localStorage.getItem("mainsignup"))||[];

        document.getElementById("sign_inb").addEventListener("click",function(event){
            event.preventDefault();
            let emailee=document.getElementById("ent_e").value;
            let pasee=document.getElementById("sign_p").value;

            if(emailee==""||pasee==""){
                alert("fields are empty")
            }else{
                for(var j=0;j<checkarr.length;j++){
                    if(checkarr[j].mails==emailee&&checkarr[j].passc==pasee){
                        d++

                        document.getElementById("myacc").textContent="My Account"
                        localStorage.setItem("checkiacc",JSON.stringify(d))
                    }
                }
                if(d>0){
                    document.getElementById("popup").style.display="none"
                    document.getElementById("pops").style.display="none"
                }else{
                    alert("enter valid credentials")
                }
            }
        })

