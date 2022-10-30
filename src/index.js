import "./scss/app.scss";
import IMask from "imask";

//input telephone mask
var element = document.getElementById("fnumber");
var maskOptions = {
  mask: "+{7}(000)000-00-00",
};
var mask = IMask(element, maskOptions);

//slider js
const slidesContainer = document.querySelector(".slides-container");
const slide = document.querySelector(".slide");
const slidesList = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const pagination = document.getElementsByClassName("current-slide");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

//slider count
const store = {
  counter: 1,
};

function increase() {
  console.log(store.counter);
  if (store.counter >= slidesList.length) {
    store.counter = 1;
  }
  store.counter++;
}

function decrease() {
  if (store.counter <= 1) {
    store.counter = slidesList.length;
  }
  store.counter--;
}

function drawCounter() {
  pagination[0].innerText = store.counter;
}

function bindEvents() {
  prevButton.addEventListener("click", () => {
    decrease();
    drawCounter();
  });
  nextButton.addEventListener("click", () => {
    increase();
    drawCounter();
  });
}

function init() {
  bindEvents();
  drawCounter();
}
init();
