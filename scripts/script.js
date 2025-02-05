import { saveRating } from "./data.js";

const buttons = document.querySelectorAll(".js-rating-button");

let selectedButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("is-activated");
    });

    button.classList.add("is-activated");
    selectedButton = button;
  });
});

document.querySelector(
  ".selected-rating"
).innerHTML = `You selected ${saveRating} out 5`;

localStorage.removeItem("save-rating");
