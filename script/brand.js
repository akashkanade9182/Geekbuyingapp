


window.productlist=async()=>{
    const url=`https://thawing-anchorage-00134.herokuapp.com/api/electronic`;
    let res=await fetch(url);
    let data=await res.json();
    return data;
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
       
        div.append(image,name,price,brand,btn,rating);
        container.append(div);
    });
    function savedata(ele){
        localStorage.setItem("display",JSON.stringify(ele));
        window.location.href="display.html";
    }
}
window.savedata=(ele)=>{
    localStorage.setItem("display",JSON.stringify(ele));
    window.location.href="display.html";
}
async function autoappend(){
    let data= await productlist();
    appendproductlist(data);
   }
   async function lenova(){
    let data= await productlist();
    data=data.filter(function(ele){
        return ele.brand=="lenova";
    })
    appendproductlist(data);
   }
   async function boat(){
    let data= await productlist();
    data=data.filter(function(ele){
        return ele.brand=="boat";
    })
    appendproductlist(data);
   }
   async function mi(){
    let data= await productlist();
    data=data.filter(function(ele){
        return ele.brand=="Xiaomi";
    })
    appendproductlist(data);
   }
   async function canon(){
    let data= await productlist();
    data=data.filter(function(ele){
        return ele.brand=="Canon";
    })
    appendproductlist(data);
   }
   async function vivo(){
    let data= await productlist();
    data=data.filter(function(ele){
        return ele.brand=="vivo";
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

   autoappend();
   let logo=document.getElementById("logo");
logo.addEventListener("click",openhome);
function openhome(){
    window.location.href="index.html";
}
