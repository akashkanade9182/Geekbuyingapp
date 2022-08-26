
window.appendproductdiv=(data)=>{
    let container=document.getElementById("productdiv");
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
        rating.innerText=`brand-${ele.rating}`;
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
 
}
window.savedata=(ele)=>{
    localStorage.setItem("display",JSON.stringify(ele));
    window.location.href="display.html";
}
window.productdiv=async()=>{
    const url=`https://thawing-anchorage-00134.herokuapp.com/api/New`;
    let res=await fetch(url);
    let data=await res.json();;
    appendproductdiv(data);
}
window.appendbestceller=(data)=>{
    let container=document.getElementById("bestcellerdiv");
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
        rating.innerText=`brand-${ele.rating}`;
        let btn=document.createElement("button");
        btn.innerText="45% off";
        let div=document.createElement("div");
        div.className="bestcellproduct";
        div.addEventListener("click",function(){
            savedata(ele);
        })
        div.append(image,name,price,brand,btn,rating);
        container.append(div);
    });
   
   
}
window.bestceller=async()=>{
    const url=`https://thawing-anchorage-00134.herokuapp.com/api/bestseller`;
    let res=await fetch(url);
    let data=await res.json();;
    appendbestceller(data);
}
productdiv();
bestceller();
