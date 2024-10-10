"use strict";
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

// Resposive menu funtionality
const navLinks = document.querySelector(".nav-links");
const newOverlay = document.querySelector(".overlay");

function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("left-0");
  newOverlay.classList.toggle("hidden");
  console.log(onToggleMenu);
}

// modal popup functionailty

const popUp = document.querySelector(".popup");
const popUpBtn = document.querySelector("#commercial");
const closeBtn = document.querySelector(".close-popup");

// vision
const visionPop = document.querySelector(".popup-two");
const vision = document.querySelector("#vision");

// values
const valuesPop = document.querySelector(".popup-three");
const values = document.querySelector("#values");

// management
const managePop = document.querySelector(".popup-four");
const management = document.querySelector("#management");

// directors
const directorsPop = document.querySelector(".popup-five");
const directors = document.querySelector("#directors");

// personnel
const personnelPop = document.querySelector(".popup-six");
const personnels = document.querySelector("#personnels");

// modal function
function modals() {
  popUp.classList.remove("hidden");
  newOverlay.classList.remove("hidden");
}

function onToggleDisplay() {
  popUp.classList.add("hidden");
  newOverlay.classList.add("hidden");
  visionPop.classList.add("hidden");
  valuesPop.classList.add("hidden");
  managePop.classList.add("hidden");
  directorsPop.classList.add("hidden");
  personnelPop.classList.add("hidden");
}

for (let i = 0; i < popUp.length; i++) {
  popUp[i].addEventListener("click", modals);
}

newOverlay.addEventListener("click", onToggleDisplay);
closeBtn.addEventListener("click", onToggleDisplay);

// console.log(closeModals);

// vision function
function visionModal() {
  visionPop.classList.remove("hidden");
  newOverlay.classList.remove("hidden");
}

for (let i = 0; i < popUp.length; i++) {
  vision[i].addEventListener("click", visionModal);
}
// values function
function valueModal() {
  valuesPop.classList.remove("hidden");
  newOverlay.classList.remove("hidden");
}

for (let i = 0; i < popUp.length; i++) {
  values[i].addEventListener("click", valueModal);
}

// management function
function manageModal() {
  managePop.classList.remove("hidden");
  newOverlay.classList.remove("hidden");
}

for (let i = 0; i < managePop.length; i++) {
  management[i].addEventListener("click", manageModal);
}

// board of directors function
function directorsModal() {
  directorsPop.classList.remove("hidden");
  newOverlay.classList.remove("hidden");
}

for (let i = 0; i < directorsPop.length; i++) {
  directors[i].addEventListener("click", directorsModal);
}

// personnels function
function personnelModal() {
  personnelPop.classList.remove("hidden");
  newOverlay.classList.remove("hidden");
}

for (let i = 0; i < personnelPop.length; i++) {
  personnels[i].addEventListener("click", personnelModal);
}

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

// Photo change functionality
