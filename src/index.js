import "./scss/app.scss";
import IMask from "imask";

//input telephone mask
var element = document.getElementById("fnumber");
var maskOptions = {
  mask: "+{7}(000)000-00-00",
};
var mask = IMask(element, maskOptions);

//slider js
const slidesCont = document.querySelector(".slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
