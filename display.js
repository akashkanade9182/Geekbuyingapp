let data=JSON.parse(localStorage.getItem("display"))||[];
append(data);
function append(ele){
    let container=document.getElementById("main");
    let imagebox=document.getElementById("photo");
    let databox=document.getElementById("data")
    
   
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
        let offprice=document.createElement("h4");
        offprice.innerText=`${ele.price+ele.price*045}Rs`;
        offprice.style.textDecoration="linethrough";
        pricebox.append(price,offprice);

        let brand=document.createElement("p");
        brand.innerText=`brand-${ele.brand}`;
        let rating=document.createElement("p");
        rating.innerText=`rating-${ele.rating}`;
        let btn=document.createElement("button");
        btn.innerText="45% off";
        let div=document.createElement("div");
        div.setAttribute("id","buttonbox");
        let btn1=document.createElement("button");
        btn1.setAttribute("id","addtocart");
        btn1.innerText="Add to Cart";
        let btn2=document.createElement("button");
        btn2.setAttribute("id","buynow");
        btn2.innerText="Buy Now";
        div.append(btn1,btn2);
        databox.append(name,pricebox,offbox,brand,btn,rating,div);
      
       
       
    
}