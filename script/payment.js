import navbar2 from "../components/navbar2.js";

let nav2=document.getElementById("cart_nav")
nav2.innerHTML=navbar2()

let save=document.getElementById("btn2")
save.addEventListener("click",function(){
let first=document.getElementById("otp").value;
    if(first==="1234"){
        alert ("Your Payment Succeful")
        window.location.href="confirm.html"
    }else if(first===""){
        alert ("Please Enter Otp")
        
    }else{
        alert ("Wrong otp entre")
    }
   
    //window.location.href="navbar.html"
})
 

let cancel=document.getElementById("btn1")
cancel.addEventListener("click",function(){
    alert ("Your Payment Succeceful")
    window.location.href="confirm.html"
    //window.location.href="navbar.html"
})



//let data=JSON.parse(localStorage.getItem("addtoCart")) || []
let data=JSON.parse(localStorage.getItem("addtoCart")) || []

let total_price=data.reduce(function(sum,el){
    sum+=Number(el.price)
    return sum
},0);

document.getElementById("total").innerText=`₹ ${total_price}`
document.getElementById("total1").innerText=`₹ ${total_price}`