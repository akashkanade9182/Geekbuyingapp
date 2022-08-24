function append(data){
    let container=document.getElementById("main");
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
    function savedata(ele){
        localStorage.setItem("display",JSON.stringify(ele));
        window.location.href="display.html";
    }
}
async function getData(){
    const url=`https://thawing-anchorage-00134.herokuapp.com/api/electronic`;
    let res=await fetch(url);
    let data=await res.json();;
    append(data);
    console.log(data)
}
getData();