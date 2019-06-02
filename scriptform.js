/*-------------------Nav----------------------*/
let hamburgerSluit = document.querySelector("#hamburgerSluit")
let mijnHamburger = document.querySelector("#hamburgerform")
let mijnNav = document.querySelector("nav")
function hamburgerVerwerken() {
  mijnNav.classList.toggle("schuiven")
}
hamburgerSluit.addEventListener("click", hamburgerVerwerken);
mijnHamburger.addEventListener('click', hamburgerVerwerken);
/*-------------------Nav----------------------*/
