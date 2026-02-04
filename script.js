const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");
const question = document.getElementById("question");

// Colocarlo bien al inicio
const rect = noButton.getBoundingClientRect();
noButton.style.position = "fixed";
noButton.style.left = `${rect.left}px`;
noButton.style.top = `${rect.top}px`;

let activated = false;

noButton.addEventListener("mouseenter", () => {
  activated = true;
});

noButton.addEventListener("mousemove", () => {
  if (!activated) return;

  const padding = 20;
  const maxX = window.innerWidth - noButton.offsetWidth - padding;
  const maxY = window.innerHeight - noButton.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", () => {
  buttons.style.display = "none";
  question.textContent = "💖💖💖";
  result.classList.remove("hidden");
});
