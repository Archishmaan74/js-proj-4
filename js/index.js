let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const guessField = document.querySelector(".guessField");
const submit = document.querySelector(".guessSubmit");
const previousGuess = document.querySelector(".prevGuesses");
const remGuesses = document.querySelector(".remGuesses");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultSection");

const p = document.createElement("p");
let prevGuess = [];
let attemptedGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(guessField.value);
    console.log(guess);
    vaildateGuess(guess);
  });
}

const vaildateGuess = (guess) => {
  if (isNaN(guess)) {
    alert(`Please enter a valid input!`);
  } else if (guess < 1) {
    alert(`Please enter value more than 1!`);
  } else if (guess > 100) {
    alert(`Please enter value less than 100!`);
  } else {
    prevGuess.push(guess);
    if (attemptedGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You guessed it correctly! Good job!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOOO low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOOO high!`);
  }
};

const displayGuess = (guess) => {
  guessField.value = "";
  previousGuess.innerHTML += `${guess}, `;
  attemptedGuess++;
  remGuesses.innerHTML = `${11 - attemptedGuess}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  guessField.value = "";
  guessField.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = [];
    attemptedGuess = 1;
    previousGuess.innerHTML = "";
    remGuesses.innerHTML = `${11 - attemptedGuess}`;
    guessField.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
};
