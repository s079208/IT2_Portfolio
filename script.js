/*-------------------ButtonPijl----------------------*/
let mijnKnoppen = document.querySelectorAll(".scroldown");
mijnKnoppen[0].addEventListener("click",button0)
function button0() {
  console.log("button0werkt");
    window.scroll({
    top: 1000,
    left: 0,
    behavior: 'smooth'
   });
  event.preventDefault();
}

mijnKnoppen[1].addEventListener("click",button1)
function button1() {
  console.log("button1 werkt");
  window.scroll({
    top: 2000,
    left: 0,
    behavior: 'smooth'
   });
  event.preventDefault();
}
console.log("console werkt");
mijnKnoppen[2].addEventListener("click",button2)
function button2() {
  console.log("button2 werkt");
  window.scroll({
    top: 3000,
    left: 0,
    behavior: 'smooth'
   });
  event.preventDefault();
}
mijnKnoppen[3].addEventListener("click",button3)
function button3() {
  console.log("button3 werkt");
  window.scroll({
    top: 4000,
    left: 0,
    behavior: 'smooth'
   });
  event.preventDefault();
}
/*-------------------ButtonPijl----------------------*/
/*-------------------Nav----------------------*/
let hamburgerSluit = document.querySelector("#hamburgerSluit")
let mijnHamburger = document.querySelector("#hamburger")
let mijnNav = document.querySelector("nav")
function hamburgerVerwerken() {
  mijnNav.classList.toggle("schuiven")
  mijnHamburger.classList.toggle("visible")
}
hamburgerSluit.addEventListener("click", hamburgerVerwerken);
mijnHamburger.addEventListener('click', hamburgerVerwerken);
/*-------------------Nav----------------------*/
