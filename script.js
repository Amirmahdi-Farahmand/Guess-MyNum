'use strict'; // Enable strict mode

// Generate a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Current game score
let score = 20;

// Highest recorded score
let highscore = 0;

// Pressing Enter in the input acts like clicking the "check" button
document.querySelector('.guess').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    document.querySelector('.check').click();
  }
});

// Helper function to change the game's message text
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Click event on the "check" button
document.querySelector('.check').addEventListener('click', function () {
  // Get the number entered by the user
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When no number is entered
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When the user's guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Change style to show winning state
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update highscore if current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Display "Too high!" or "Too low!" based on guess
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--; // Decrease score by 1
      document.querySelector('.score').textContent = score;
    } else {
      // When score reaches zero - game lost
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#ff0000ff';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

// Click event on the "Again!" button to reset the game
document.querySelector('.again').addEventListener('click', function () {
  // Reset values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset messages and UI elements to initial state
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Reset styles to default
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
