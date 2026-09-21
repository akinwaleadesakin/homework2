import { changePage } from "../model/model.js";


const homeButton = document.querySelector("#home");

const destinationsButton = document.querySelector("#destinations");

const foodButton = document.querySelector("#food");

const aboutButton = document.querySelector("#about");


homeButton.addEventListener("click", function () {
    changePage("home");
});


destinationsButton.addEventListener("click", function () {
    changePage("destinations");
});


foodButton.addEventListener("click", function () {
    changePage("food");
});


aboutButton.addEventListener("click", function () {
    changePage("about");
});


changePage("home");