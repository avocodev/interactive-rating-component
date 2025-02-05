export let saveRating = localStorage.getItem("save-rating") || 0;

document.querySelectorAll(".js-rating-button").forEach((button) => {
  button.addEventListener("click", () => {
    saveRating = button.innerText;
    localStorage.setItem("save-rating", saveRating);
  });
});
