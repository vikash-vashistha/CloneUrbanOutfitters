

function check_user(){
    let checr=JSON.parse(localStorage.getItem("checkiacc"))
    if(checr>0){
        document.getElementById("myaccdiv").style.display="flex"
        console.log(checr)
    }else{  
        document.getElementById("myaccdiv").style.display="none"
        console.log(checr)
    }
    if(checr==0||checr==null){
        document.getElementById("signindiv").style.display="flex"
        console.log(checr)
    }else{  
        document.getElementById("signindiv").style.display="none"
        console.log(checr)
    }
}
check_user()
document.getElementById("myacc").addEventListener("click",function(){
    localStorage.setItem("checkiacc",JSON.stringify(0))
    check_user()
})
document.getElementById("signb").addEventListener("click",function(){
    document.getElementById("popup").style.display="flex"
})
document.getElementById("sign_upb").addEventListener("click",function(event){
event.preventDefault()
document.getElementById("popup").style.display="none"
document.getElementById("pops").style.display="flex"
document.getElementById("inform").textContent=""
document.getElementById("hide_pf").style.display="none"
document.getElementById("show_pf").style.display="flex"
 document.getElementById("sign_p").type="password";
 document.getElementById("hide_ps").style.display="none"
            document.getElementById("show_ps").style.display="flex"
            document.getElementById("sineup_pass").type="password";
document.getElementById("sigin").reset()
document.getElementById("sigup").reset()
})
document.getElementById("sign_b").addEventListener("click",function(event){
    event.preventDefault()
    document.getElementById("popup").style.display="flex"
    document.getElementById("pops").style.display="none"
    document.getElementById("errf").textContent=""
    document.getElementById("hide_pf").style.display="none"
    document.getElementById("show_pf").style.display="flex"
    document.getElementById("sign_p").type="password";
    document.getElementById("hide_ps").style.display="none"
            document.getElementById("show_ps").style.display="flex"
            document.getElementById("sineup_pass").type="password";
    document.getElementById("sigin").reset()
    document.getElementById("sigup").reset()
    })
document.getElementById("clo_divf").addEventListener("click",function(event){
        event.preventDefault()
        document.getElementById("popup").style.display="none"
        document.getElementById("errf").textContent=""
        document.getElementById("inform").textContent=""
        document.getElementById("inform").textContent=""
        document.getElementById("hide_pf").style.display="none"
        document.getElementById("show_pf").style.display="flex"
        document.getElementById("sign_p").type="password";
        document.getElementById("hide_ps").style.display="none"
            document.getElementById("show_ps").style.display="flex"
            document.getElementById("sineup_pass").type="password";
        document.getElementById("sigin").reset()
        document.getElementById("sigup").reset()
        })
document.getElementById("clo_divs").addEventListener("click",function(event){
        event.preventDefault()
        document.getElementById("pops").style.display="none"
        document.getElementById("errf").textContent=""
        document.getElementById("hide_pf").style.display="none"
        document.getElementById("show_pf").style.display="flex"
        document.getElementById("sign_p").type="password";
        document.getElementById("hide_ps").style.display="none"
            document.getElementById("show_ps").style.display="flex"
            document.getElementById("sineup_pass").type="password";
        document.getElementById("sigin").reset()
        document.getElementById("sigup").reset()
        })
        document.getElementById("show_pf").addEventListener("click",function(){
            document.getElementById("show_pf").style.display="none"
            document.getElementById("hide_pf").style.display="flex"
            document.getElementById("sign_p").type="text";
        })
        document.getElementById("hide_pf").addEventListener("click",function(){
            document.getElementById("hide_pf").style.display="none"
            document.getElementById("show_pf").style.display="flex"
            document.getElementById("sign_p").type="password";
            
        })
        document.getElementById("show_ps").addEventListener("click",function(){
            document.getElementById("show_ps").style.display="none"
            document.getElementById("hide_ps").style.display="flex"
            document.getElementById("sineup_pass").type="text";
        })
        document.getElementById("hide_ps").addEventListener("click",function(){
            document.getElementById("hide_ps").style.display="none"
            document.getElementById("show_ps").style.display="flex"
            document.getElementById("sineup_pass").type="password";
            
        })


        var mainarr=JSON.parse(localStorage.getItem("mainsignup"))||[];
        var  c=0;
        document.getElementById("creacc").addEventListener("click",function(event){
          event.preventDefault();
          let mainarr=JSON.parse(localStorage.getItem("mainsignup"))||[];
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
    document.getElementById("errf").textContent="It looks like you already have an account with us!"
}else{
    datas={
        mails:emails,
        passc:passcode
    }
    mainarr.push(datas);
    localStorage.setItem("checkiacc",JSON.stringify(1))
    check_user()
    localStorage.setItem("mainsignup",JSON.stringify(mainarr))
    document.getElementById("popup").style.display="none"
    document.getElementById("pops").style.display="none"
    document.getElementById("thirdp").style.display="flex"
    document.getElementById("hide_pf").style.display="none"
    document.getElementById("show_pf").style.display="flex"
    document.getElementById("sign_p").type="password";
    document.getElementById("hide_ps").style.display="none"
            document.getElementById("show_ps").style.display="flex"
            document.getElementById("sineup_pass").type="password";
    document.getElementById("sigin").reset()
    document.getElementById("sigup").reset()
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
        var checkarr=JSON.parse(localStorage.getItem("mainsignup"))||[];
        document.getElementById("sign_inb").addEventListener("click",function(event){
            event.preventDefault();
            let  checkarr=JSON.parse(localStorage.getItem("mainsignup"))||[];
            console.log("yes",checkarr)
            let emailee=document.getElementById("ent_e").value;
            let pasee=document.getElementById("sign_p").value;

            if(emailee==""||pasee==""){
                alert("fields are empty")
            }else{
                for(var j=0;j<checkarr.length;j++){
                    console.log(checkarr[j].mails,checkarr[j].passc)
                    if((checkarr[j].mails==emailee)&&(checkarr[j].passc==pasee)){
                        d++
                        console.log(checkarr[j].mails,checkarr[j].passc)
localStorage.setItem("checkiacc",JSON.stringify(1)) 
check_user()      
                    }
                }
                if(d>0){
                    document.getElementById("popup").style.display="none"
                    document.getElementById("pops").style.display="none"
                    document.getElementById("hide_pf").style.display="none"
                    document.getElementById("show_pf").style.display="flex"
                    document.getElementById("sign_p").type="password";
                    document.getElementById("hide_ps").style.display="none"
            document.getElementById("show_ps").style.display="flex"
            document.getElementById("sineup_pass").type="password";
                    document.getElementById("sigin").reset()
                    document.getElementById("sigup").reset()
                    d=0
                }else{
                    
                    document.getElementById("inform").textContent="Please enter a valid email address and password."
                }
            }
        })

