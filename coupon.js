import navbar from "../components/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()

import foter from "../components/foter.js";
let fot=document.getElementById("foter")
fot.innerHTML=foter()







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


async function getData(){

try{
let res = await fetch('https://thawing-anchorage-00134.herokuapp.com/api/electronic')
let data= await res.json();
// console.log(data)
dataAppend(data)

}
catch(err){
    console.log(err)

}
}
getData()
function dataAppend(data){
  let container = document.getElementById('container');
  // container.innerHTML= null;
data.forEach(function(el){
// console.log(el.name)
  let mainBox = document.createElement('div');
  let imageBox = document.createElement('div');
  let titleBox = document.createElement('div');

  let nam = document.createElement('p')
  nam.innerText=el.name;

  let bran = document.createElement('h3')
  bran.innerText=el.brand;
  
  let pric = document.createElement('h2')
  pric.innerText=el.price;

  let ratin = document.createElement('p')
  ratin.innerText=el.rating;

  let image = document.createElement('img');
  image.src=el.image;
  mainBox.append(imageBox,titleBox)
  imageBox.append(image);
  titleBox.append(pric,bran,nam,ratin)
  

  
  container.append(imageBox,titleBox);
 
 
})
}

