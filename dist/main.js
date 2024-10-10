// Resposive menu funtionality
const navLinks = document.querySelector(".nav-links");
const newOverlay = document.querySelector(".overlay");

function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("left-0");
  newOverlay.classList.toggle("hidden");
  console.log(onToggleMenu);
}

// dropdown functionality
const dropdownButton = document.querySelector("#dropdown");
const arrowDown = document.querySelector(".down");
const arrowUp = document.querySelector(".up");

function toggleDropdown() {
  dropdown.classList.toggle("hidden");
  up.classList.toggle("hidden");
  down.classList.toggle("hidden");
}

dropdownButton.addEventListener("toggle", toggleDropdown);

// scroll to top button functionailty
const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 1000) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
}

function topBtn() {
  window.scrollTo({
    top: 0,
  });
}
goTopBtn.addEventListener("click", topBtn);

// Photo slideshow functionality

const slideshow = document.querySelector(".slideshow");
const images = slideshow.querySelectorAll("img");
let currentImage = 0;
slideshow.style.transition = "opacity 3s ease-in-out";

setInterval(() => {
  images[currentImage].style.opacity = 0;
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.opacity = 1;
}, 5000); // Change image every 5 seconds

// year and photo change functionality
const firstDiv = document.querySelector(".firstDiv");
const secondDiv = document.querySelector(".secondDiv");
const thirdDiv = document.querySelector(".thirdDiv");
const fourthDiv = document.querySelector(".fourthDiv");
const fifthDiv = document.querySelector(".fifthDiv");
const sixthDiv = document.querySelector(".sixthDiv");
const firstDivBtn = document.querySelector(".firstDivBtn");
const secondDivBtn = document.querySelector(".secondDivBtn");
const thirdDivBtn = document.querySelector(".thirdDivBtn");
const fourthDivBtn = document.querySelector(".fourthDivBtn");
const fifthDivBtn = document.querySelector(".fifthDivBtn");
const sixthDivBtn = document.querySelector(".sixthDivBtn");

function showFirstDiv() {
  firstDiv.classList.remove("hidden");
  secondDiv.style.display = "none";
  thirdDiv.style.display = "none";
  fourthDiv.style.display = "none";
  fifthDiv.style.display = "none";
  sixthDiv.style.display = "none";
}

function showSecondDiv() {
  firstDiv.classList.add("hidden");
  thirdDiv.style.display = "none";
  fourthDiv.style.display = "none";
  fifthDiv.style.display = "none";
  secondDiv.classList.remove("hidden");
  secondDiv.style.display = "flex";
  sixthDiv.style.display = "none";
}
function showThirdDiv() {
  firstDiv.classList.add("hidden");
  secondDiv.style.display = "none";
  fourthDiv.style.display = "none";
  fifthDiv.style.display = "none";
  thirdDiv.classList.remove("hidden");
  thirdDiv.style.display = "flex";
  sixthDiv.style.display = "none";
}
function showFourthDiv() {
  firstDiv.classList.add("hidden");
  secondDiv.style.display = "none";
  thirdDiv.style.display = "none";
  fifthDiv.style.display = "none";
  fourthDiv.classList.remove("hidden");
  fourthDiv.style.display = "flex";
  sixthDiv.style.display = "none";
}
function showFifthDiv() {
  firstDiv.classList.add("hidden");
  secondDiv.style.display = "none";
  thirdDiv.style.display = "none";
  fourthDiv.style.display = "none";
  fifthDiv.classList.remove("hidden");
  fifthDiv.style.display = "flex";
  sixthDiv.style.display = "none";
}
function showSixthDiv() {
  firstDiv.classList.add("hidden");
  secondDiv.style.display = "none";
  thirdDiv.style.display = "none";
  fourthDiv.style.display = "none";
  fifthDiv.style.display = "none";
  sixthDiv.classList.remove("hidden");
  sixthDiv.style.display = "flex";
}

for (let i = 0; i < firstDiv.length; i++) {
  firstDivBtn[i].addEventListener("click", showFirstDiv);
}
for (let i = 0; i < secondDiv.length; i++) {
  secondDivBtn[i].addEventListener("click", showSecondDiv);
}
for (let i = 0; i < thirdDiv.length; i++) {
  thirdDivBtn[i].addEventListener("click", showThirdDiv);
}
for (let i = 0; i < fourthDiv.length; i++) {
  fourthDivBtn[i].addEventListener("click", showFourthDiv);
}
for (let i = 0; i < fifthDiv.length; i++) {
  fifthDivBtn[i].addEventListener("click", showFifthDiv);
}
for (let i = 0; i < sixthDiv.length; i++) {
  sixthDivBtn[i].addEventListener("click", showSixthDiv);
}
