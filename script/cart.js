import navbar2 from "../components/navbar2.js";

let nav2=document.getElementById("cart_nav")
nav2.innerHTML=navbar2()

import foter from "../components/foter.js";
let fot=document.getElementById("foter")
fot.innerHTML=foter()

 


let data=JSON.parse(localStorage.getItem("addtoCart")) || []

function append(){

    console.log(data)

let buc=document.getElementById("cart_product")
data.forEach(function(el,index){
    let div=document.createElement("div")
    div.setAttribute("class","product_cart")
    
    let img=document.createElement("img");
    img.src=el.image
    let div1=document.createElement("div") 
    div1.append(img)
    
    let tit=document.createElement("p")
    tit.innerText=el.name
    let div2=document.createElement("div") 
    div2.append(tit)
    
    let prc=document.createElement("p")
    prc.innerText=`₹ ${el.price}`
    let div3=document.createElement("div") 
    div3.append(prc)
    
    let div4=document.createElement("div") 
    let diva=document.createElement("div") 
    let btn1=document.createElement("button")
    btn1.innerText="-"
    btn1.addEventListener("click",function(){
        decrement(p,el.price)
    })
    let p=document.createElement("p")
    p.innerText=1
    let btn2=document.createElement("button")
    btn2.innerText="+"
    btn2.addEventListener("click",function(){
        increment(p,el.price)
    })
    diva.append(btn1,p,btn2)
    div4.append(diva)
    
    let div5=document.createElement("div")
    let btn3=document.createElement("button")
    btn3.innerText="DELETE"
    btn3.addEventListener("click",function(){
        remove(index)
    })
    div5.append(btn3)

    let div6=document.createElement("div")
    let p1=document.createElement("p")
    p1.setAttribute("id","total1")
    p1.innerText=0
    div6.append(p1)

    div.append(div1,div2,div3,div4,div6,div5)
    
    buc.append(div)
})

 
}

append()

function remove(index){
data.splice(index,1)

localStorage.setItem("addtoCart",JSON.stringify(data))
window.location.reload();
}

let total_price=data.reduce(function(sum,el){
    sum+=Number(el.price)
    return sum
},0);

let tot=document.getElementById("total").innerText=`₹ ${total_price}`
document.getElementById("total1").innerText=`₹ ${total_price}`


function  decrement(p,price){
    let b=p.innerText;

    if(b>0){
        b--;
        total_price-=Number(price);
        document.getElementById("total").innerText=`₹ ${total_price}`
        document.getElementById("total1").innerText=`₹ ${total_price}`

        p.innerText=b;

    }
    p.innerText=b;
}

function increment(p,price){
    let a=p.innerText;
    a++
    total_price+=Number(price);
    document.getElementById("total").innerText=`₹ ${total_price}`
    document.getElementById("total1").innerText=`₹ ${total_price}`

  p.innerText=a;

}

let pro=document.getElementById("proceed")
pro.addEventListener("click",function(){

if(total_price===0){
    alert("Plese add some item")
}else{
    alert("Redirect to Checout page")
    window.location.href="cheakout.html"
}
})