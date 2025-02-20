const prevButton = document.getElementById("btn-prev");
const nextButton = document.getElementById("btn-next");
const inactiveButton = document.querySelector(".btn.inactive");

if (inactiveButton) {
  inactiveButton.disabled = true;
}
let ind = 0;

prevButton.addEventListener("click", (event) => {
  nextButton.disabled = false;
  nextButton.classList.remove("inactive");
  nextButton.classList.add("active");

  if (ind > 0) {
    ind -= 1;
  }

  // Remove all active classes
  document
    .querySelectorAll(".circle")
    .forEach((circle) => circle.classList.remove("active"));

  for (let i = 0; i <= ind; i++) {
    document
      .querySelector(`.circle:nth-child(${i + 1})`)
      .classList.add("active");
  }

  if (ind === 0) {
    prevButton.classList.remove("active");
    prevButton.classList.add("inactive");
    prevButton.disabled = true;
  }
});

nextButton.addEventListener("click", (event) => {
  prevButton.disabled = false;
  prevButton.classList.remove("inactive");
  prevButton.classList.add("active");

  if (ind < 3) {
    ind += 1;
  }

  // Remove all active classes
  document
    .querySelectorAll(".circle")
    .forEach((circle) => circle.classList.remove("active"));

  for (let i = 0; i <= ind; i++) {
    document
      .querySelector(`.circle:nth-child(${i + 1})`)
      .classList.add("active");
  }

  if (ind === 3) {
    nextButton.classList.remove("active");
    nextButton.classList.add("inactive");
    nextButton.disabled = true;
  }
});
