




let data=JSON.parse(localStorage.getItem("display"))||[];
let counter=0;
append(data);
function append(ele){
    let container=document.getElementById("main");
    let imagebox=document.getElementById("photo");
    let databox=document.getElementById("data");
    
    
   
        let image=document.createElement("img");
        image.src=ele.image;
        imagebox.append(image);
        let name=document.createElement("h2");
        name.innerText=ele.name;
        let price=document.createElement("h4");
        price.innerText=`price-${ele.price}Rs.`;
        let pricebox=document.createElement("div");
        pricebox.setAttribute("id","pricebox");
        let offbox=document.createElement("h4");
        offbox.setAttribute("id","offbox");
        offbox.innerText="2% OFF for new User"
        // let offprice=document.createElement("h4");
        // offprice.innerText=`${ele.price+ele.price*045}Rs`;
        // offprice.style.textDecoration="linethrough";
        pricebox.append(price);

        let brand=document.createElement("p");
        brand.innerText=`brand-${ele.brand}`;
        let rating=document.createElement("p");
        rating.innerText=`rating-${ele.rating}`;
        let btn=document.createElement("button");
        btn.setAttribute("class","btn")
        btn.innerText="45% off";
        let div=document.createElement("div");
        div.setAttribute("id","buttonbox");
        let btn1=document.createElement("button");
        btn1.setAttribute("id","addtocart");
        btn1.innerText="Add to Cart";
        btn1.addEventListener("click",function(){
            addtoCart(ele);
        })
        let countbox=document.createElement("div");
        countbox.setAttribute("id","countbox");
        let quantity=document.createElement("p");
        quantity.innerText="Qunatity"
        let countlow=document.createElement("div");
        countlow.innerText="-";
        countlow.addEventListener("click",function(){
            Qdecrease();
        })
        let counthigh=document.createElement("div");
        counthigh.innerText="+";
        counthigh.addEventListener("click",function(){
            Qincrease();
        })
        let count=document.createElement("div");
        count.innerText=counter;
        count.setAttribute("id","count");
        countbox.append(countlow,count,counthigh);

        let btn2=document.createElement("button");
        btn2.setAttribute("id","buynow");
        btn.addEventListener("click",function(){
            buyitem(ele);
        })
        btn2.innerText="Buy Now";
        div.append(btn1,btn2);
        databox.append(name,pricebox,offbox,brand,btn,rating,quantity,countbox,div);
      
       
       
    
}
function Qdecrease(){
    counter--;
    let count=document.getElementById("count");
    count.innerText=counter;

};
function Qincrease(){
    counter++;
    let count=document.getElementById("count");
    count.innerText=counter;

};
let Cartarray=[];
let Buyarray=[];
function addtoCart(ele){
    let datalist={
        name:ele.name,
        image:ele.image,
        price:ele.price,
        rating:ele.rating,
        qunatity:counter


    }
    Cartarray.push(datalist);
   
    localStorage.setItem("addtoCart",JSON.stringify(Cartarray));
    alert("your product is successfully add to Cart");
    let cart1=Cartarray.length
    let cart2=document.getElementById("cart_add")
    cart2.innerText=cart1
   window.location.href="cart.html";
}

// let cart1=Cartarray.length
// let cart2=document.getElementById("cart_add")
// cart2.innerText=cart1



function buyitem(ele){
    let datalist={
        name:ele.name,
        image:ele.image,
        price:ele.price,
        rating:ele.rating,
        qunatity:counter


    }
    Buyarray.push(datalist);
    localStorage.setItem("addtoCart",JSON.stringify(Buyarray));
    window.location.href="cart.html"
}

import navbar from "../components/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()

import foter from "../components/foter.js";
let fot=document.getElementById("foter")
fot.innerHTML=foter()