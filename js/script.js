let randomNumber;
let attempts = 0;

initializeGame();

document.querySelector("#resetBtn").addEventListener("click", initializeGame);
document.querySelector("#guessBtn").addEventListener("click", checkGuess);

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  attempts = 0;

  document.querySelector("#resetBtn").style.display = "none";
  document.querySelector("#guessBtn").style.display = "inline";

  const playerGuess = document.querySelector("#playerGuess");
  playerGuess.focus();
  playerGuess.value = "";

  document.querySelector("#feedback").textContent = "";
  document.querySelector("#guesses").textContent = "";
}

function checkGuess() {
  const feedback = document.querySelector("#feedback");
  const guessText = document.querySelector("#playerGuess").value;
  const guess = Number(guessText);

  if (
    guess < 1 ||
    guess > 99
  ) {
    feedback.textContent = "Enter a whole number between 1 and 99.";
    feedback.style.color = "red";
    return;
  }

  attempts++;
  feedback.style.color = "orange";

  if (guess === randomNumber) {
    feedback.textContent = "You win!";
    feedback.style.color = "darkgreen";
    gameOver();
  } else {
    document.querySelector("#guesses").textContent += guess + " ";

    if (attempts === 7) {
      feedback.textContent = "You lose!";
      feedback.style.color = "red";
      gameOver();
    } else if (guess > randomNumber) {
      feedback.textContent = "Guess was high.";
    } else {
      feedback.textContent = "Guess was low.";
    }
  }
}

function gameOver() {
  document.querySelector("#guessBtn").style.display = "none";
  document.querySelector("#resetBtn").style.display = "inline";
}
