'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number 🔍';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 24;
*/

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ no number';
//   }
// });

// Math.trunc is to remove the decimals, Math.random(random numbers 0-1)
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when these is no guess
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO NUMBER';

    //   when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✔✔ CORRECT NUMBER! ';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.highscore').textContent = score;

    // when guess is too high
  } else if (guess > secretNumber)
    if (score > 1) {
      document.querySelector('.message').textContent = '🤷‍♂️ TOO HIGH ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💩 YOU LOSS ';
      document.querySelector('.score').textContent = '0';
    }
  // when guess is too low
  else if (guess < secretNumber)
    if (score > 1) {
      document.querySelector('.message').textContent = '🤦‍♂️ TOO LOW ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💩 YOU LOSS ';
      document.querySelector('.score').textContent = '0';
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  //   document.querySelector('.guess').value = '';
  //   document.querySelector('.score').textContent = 20;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  //   const secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.number').style.width = '15rem';
  //   document.querySelector('body').style.backgroundColor = '#222';
});
