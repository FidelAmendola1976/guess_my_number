"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Congrats!! Correct number";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too high!";
  } else {
    document.querySelector(".message").textContent = "📉 Too low";
  }
});
