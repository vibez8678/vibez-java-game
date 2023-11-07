'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //   NOT NUMBER INPUTED
  if (!guess) {
    displayMessage('⛔ NO NUMBER');
    // CORRECT GUESS
  } else if (guess === secretNumber) {
    displayMessage('✔ CORRECT NUMBER');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // WRONG GUESS
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? '🤷‍♀️ TOO HIGH' : '🤦‍♀️ TOO LOW');
      score--;
      // document.querySelector('.score').textContent =
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent =
      displayMessage('😢 YOU LOST');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#e52222';
      document.querySelector('.number').style.width = '30rem';

      // document.querySelector('.score').textContent =
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.score').textContent =
  displayScore(score);
  // document.querySelector('.message').textContent =
  displayMessage('😃 Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.number').textContent =
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
