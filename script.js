"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  
  // When there's no number
  if (!guess) {
    displayMessage("⛔ No number!");
  
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Congrats!! Correct number");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game");
      displayScore(0);
    }
    document.querySelector(".again").addEventListener("click", function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      displayMessage("Start guessing...");
      displayScore(score);
      displayNumber("?");
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".number").style.width = "15rem";
    });
  }
});
