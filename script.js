// Generate a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20) + 1;

// Set the initial score and highscore
let score = 20;
let highscore = 0;

// Select elements from the HTML document
const numberEl = document.querySelector('.number');
const guessInputEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

// Function to display a message
function displayMessage(message) {
  messageEl.textContent = message;
}

// Function to reset the game
function resetGame() {
  // Generate a new secret number
  secretNumber = Math.floor(Math.random() * 20) + 1;

  // Reset the score and update the score display
  score = 20;
  scoreEl.textContent = score;

  // Clear the guess input field and focus on it
  guessInputEl.value = '';
  guessInputEl.focus();

  // Reset the number display and the message display
  numberEl.textContent = '?';
  displayMessage('Start guessing...');
  // Enable the guessInput
  guessInputEl.disabled = false;
}

// Function to handle a correct guess
function handleCorrectGuess() {
  // Update the number display and the message display
  numberEl.textContent = secretNumber;
  displayMessage('🎉 Correct!');

  // Update the highscore if necessary and update the highscore display
  if (score > highscore) {
    highscore = score;
    highscoreEl.textContent = highscore;
  }
}

// Function to handle an incorrect guess
function handleIncorrectGuess(guess) {
  // Update the score and the score display
  if (score > 0) score--;
  scoreEl.textContent = score;

  // Display a message based on the guess
  if (guess > secretNumber) {
    displayMessage('📈 Too high!');
  } else {
    displayMessage('📉 Too low!');
  }

  // End the game if the score reaches 0
  if (score === 0) {
    displayMessage('💥 You lost the game!');
    guessInputEl.disabled = true;
  }
}

// Event listener for the "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

  // Check if the guess is valid
  if (guess >= 1 && guess <= 20) {
    // Check if the guess is correct
    if (guess === secretNumber) {
      handleCorrectGuess();
    } else {
      handleIncorrectGuess(guess);
    }
  } else {
    displayMessage('⛔ Invalid guess! (must be between 1 and 20)');
  }
});

// Event listener for the "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

