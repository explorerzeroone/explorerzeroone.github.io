"use strict";

let number = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMesage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    if (score > 0) {
      displayMesage("No Number!❌");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You have lost the game!";
    }
  } else if (guess === number) {
    displayMesage("Your guess is correct!✅");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 0) {
      displayMesage("You guessed too high!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMesage("You have lost the game!");
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "You guessed too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You have lost the game!";
    }
  }
});

//again button functionality:
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
