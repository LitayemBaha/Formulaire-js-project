let send=document.getElementById("send");
let name=document.getElementById("name");
let address=document.getElementById("address");
let mail=document.getElementById("mail");
let password=document.getElementById("password");
let commets=document.getElementById("commets");
let msg="";
let isAlert=true;
send.addEventListener("click",(event)=>{ 
  let mdp=password.value;
  if(mdp.length<8){
     msg+="The password has less than 8 characters\n";
    isAlert=false;
    }  
 let lettre=/[a-z]+/;
 let chiffre=/[0-9]+/;
 let majus=/[A-Z]+/;
  if(lettre.test(mdp)===false ||chiffre.test(mdp)===false ||majus.test(mdp)===false){
    msg+="The password must be a combination of charatacters , numbers and at least a capital letter\n";
     isAlert=false;
  }
  let email=mail.value;
  let posAtt=email.search("@");
  let ch=email.slice(posAtt);
  let posDot=ch.includes(".");
  if(posAtt<1 || posDot===false){
     msg+="Doesn't have a valid e-mail adress\n";
     isAlert=false;
  }
  if(name.value==="" || address.value==="" || mail.value==="" || password.value==="" || commets.value===""){
    msg+="One of the inputs is empty";
     isAlert=false;
  }
  if(isAlert===false){
  alert(msg);
  }
});

  
 
