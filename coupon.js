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
console.log(data)

}
catch(err){
    console.log(err)

}

}