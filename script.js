'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const x = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 Put some number!';
  } 
  else if (score > 0) {
    if (guess === secretnumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      if (score > highscore) highscore = score;
      document.querySelector('.number').textContent = secretnumber;
      document.querySelector('.highscore').textContent = highscore;
      document.body.style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretnumber) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💥 You lose the game!';
    document.querySelector('.score').textContent = '0';
  }
};
document.querySelector('.check').addEventListener('click', x);
let again = function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
document.querySelector('.again').addEventListener('click', again);
