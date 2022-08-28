import navbar from "../components/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()

import foter from "../components/foter.js";
let fot=document.getElementById("foter")
fot.innerHTML=foter()

let data=JSON.parse(localStorage.getItem("addtoCart")) || []
let leng=data.length
let cart222=document.getElementById("cart_add")
cart222.innerText=leng


window.productlist=async()=>{
    const url=`https://thawing-anchorage-00134.herokuapp.com/api/New`;
    let res=await fetch(url);
    let data=await res.json();
    return data;
}
async function autoappend(){
 let data= await productlist();
 appendproductlist(data);
}
function appendproductlist(data){
    let container=document.getElementById("productlist");
    
    container.innerHTML=null;
    data.forEach(function(ele){
        let image=document.createElement("img");
        image.src=ele.image;
        let name=document.createElement("h2");
        name.innerText=ele.name;
        let price=document.createElement("h4");
        price.innerText=`price-${ele.price}Rs.`;
        let brand=document.createElement("p");
        brand.innerText=`brand-${ele.brand}`;
        let rating=document.createElement("p");
        rating.innerText=`rating-${ele.rating}`;
        let btn=document.createElement("button");
        btn.innerText="45% off";
        let div=document.createElement("div");
        div.className="product";
        
        div.addEventListener("click",function(){
            savedata(ele);
        })
       
        div.append(image,name,price,btn,rating);
        container.append(div);
    });
    function savedata(ele){
        localStorage.setItem("display",JSON.stringify(ele));
        window.location.href="display.html";
    }
}
window.searchEl=async()=>{
let data=await productlist();
data=data.filter(function(ele){
    return ele.category=="electronic";
})
appendproductlist(data);
}
window.searchSp=async()=>{
    let data=await productlist();
    data=data.filter(function(ele){
        return ele.category=="sports";
    })
    appendproductlist(data);
    }
    window.searchKitch=async()=>{
        let data=await productlist();
        data=data.filter(function(ele){
            return ele.category=="kitchen";
        })
        appendproductlist(data);
        }
        window.searchph=async()=>{
            let data=await productlist();
            data=data.filter(function(ele){
                return ele.category=="phon";
            })
            appendproductlist(data);
            }
            window.sortlh=async()=>{
                let data=await productlist();
                data=data.sort(function(a,b){
                    return a.price-b.price;
                })
                appendproductlist(data);
                }
                window.sorthl=async()=>{
                    let data=await productlist();
                    data=data.sort(function(a,b){
                        return b.price-a.price;
                    })
                    appendproductlist(data);
                    }
                    window.sortr=async()=>{
                        let data=await productlist();
                        data=data.sort(function(a,b){
                            return b.rating-a.rating;
                        })
                        appendproductlist(data);
                        }
                        function search(event){
    if(event.key=="Enter")
    {
       inputsearch();
    }
   
}
async function inputsearch(){
    let quary=document.getElementById("search_input").value;
    const url=`https://thawing-anchorage-00134.herokuapp.com/api/${quary}`
    let res=await fetch(url);
    let data=await res.json();
    appendproductlist(data)
}
// function search(event){
//     if(event.key=="Enter")
//     {
//        inputsearch();
//     }
   
// }
// async function inputsearch(){
//     let quary=document.getElementById("search_input").value;
//     const url=`https://thawing-anchorage-00134.herokuapp.com/api/${quary}`
//     let res=await fetch(url);
//     let data=await res.json();
//     appendproductlist(data)
// }
autoappend()
let logo=document.getElementById("logo");
logo.addEventListener("click",openhome);
function openhome(){
    window.location.href="index.html";
}


// let data=JSON.parse(localStorage.getItem("addtoCart")) || []
// let cart1=data.length
// let cart2=document.getElementById("cart_add")
// cart2.innerText=cart1


let signUp=JSON.parse(localStorage.getItem("signupData")) || [];
let Name=signUp.name
let login=localStorage.getItem("login_status")

let cart22=document.getElementById("core")
cart22.addEventListener("click",function(){
     if(login == "true"){
        window.location.href="cart.html"
     }else{
        alert("login First")
        window.location.href="signup.html"

     }
})

