import navbar2 from "../components/navbar2.js";

let nav2=document.getElementById("cart_nav")
nav2.innerHTML=navbar2()

import foter from "../components/foter.js";
let fot=document.getElementById("foter")
fot.innerHTML=foter()

let save=document.getElementById("btn1")
save.addEventListener("click",function(){
let first=document.getElementById("first").value;
    if(first===""){
        alert ("Please fill the details")
    }else{
        alert ("Your Address Confirm")
        window.location.href="payment.html"
    }
   
    //window.location.href="navbar.html"
})
 

let cancel=document.getElementById("btn2")
cancel.addEventListener("click",function(){
    alert ("Reset Your Address")
    window.location.reload()
    //window.location.href="navbar.html"
})