'use strict';
let score = 20;
let secret = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

const displayMesage = function (msg) {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        displayMesage('⛔️  No Number');
    } else if (secret === guess) {
        displayMesage('🏆 Correct Number');
        document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secret) {
        if (score > 1) {
            displayMesage(guess > secret ? '📈 Too High' : '📉 Too Low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMesage('🧨 You Lost!');
            score--;
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', () => {
    secret = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = ''
    displayMesage('Start guessing...');
})