// Selectors
const minValue = document.querySelector("#min");
const maxValue = document.querySelector("#max");
const gButton = document.querySelector(".gButton");
const divResult = document.querySelector(".result");
const slider = document.querySelector(".slider");
const sliderButton = document.querySelector(".slider-button");
const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
// const container = document.querySelector(".container");
const body = document.querySelector("body");
const title = document.querySelector(".title");
const powered = document.querySelector(".powered");
const input = document.querySelectorAll("input");
const resultH2 = document.querySelector(".resultH2");
const newResult = document.querySelector(".newResult");

// Listeners
gButton.addEventListener("click", generateResult);
slider.addEventListener("click", toggleDark);
// Functions
function toggleDark() {
  sliderButton.classList.toggle("active");
  sun.classList.toggle("nonactive");
  moon.classList.toggle("active");
  body.classList.toggle("active");
  gButton.classList.toggle("active");
  title.classList.toggle("active");
  powered.classList.toggle("active");
  input[0].classList.toggle("active");
  input[1].classList.toggle("active");
  resultH2.classList.toggle("active");
  newResult.classList.toggle("active2");
}
function generateResult(e) {
  //Prevents form from submiting
  e.preventDefault();

  //Limits and difference
  let downLimit = minValue.value;
  let upLimit = maxValue.value;
  let difference = upLimit - downLimit + 1;

  //random Number
  const randomNr = Math.floor(Math.random() * difference) + 1;
  const newResult = document.querySelector(".newResult");
  newResult.innerText = randomNr;
  newResult.classList.add("active");
  newResult.addEventListener("transitionend", function () {
    newResult.classList.remove("active");
  });
}
