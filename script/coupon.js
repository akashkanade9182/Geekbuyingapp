let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}
window.productlist=async()=>{
  const url=`https://thawing-anchorage-00134.herokuapp.com/api/New`;
  let res=await fetch(url);
  let data=await res.json();
  return data;
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
async function autoappend(){
let data= await productlist();
appendproductlist(data);
}
function appendproductlist(data){
  let container=document.getElementById("productlist");
  container.innerHTML=null;
  
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
   
     
      let coupanbox=document.createElement("div");
      coupanbox.setAttribute("id","coupanbox");
      let code=document.createElement("h4");
      code.innerText="GHKLENM";
      let copy=document.createElement("div");
      copy.innerText="coupan";
      copy.addEventListener("click",function(){
        openpop();
      });
      coupanbox.append(code,copy);
     
      div.append(image,name,price,btn,rating,coupanbox);
      container.append(div);
  });
  function savedata(ele){
      localStorage.setItem("display",JSON.stringify(ele));
      window.location.href="display.html";
  }
}
let popup=document.getElementById("popup");
function openpop(){
   
    popup.classList.add("open-popup");
}
function closepop()
{
    popup.classList.remove("open-popup");
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
autoappend()




