// game value

let min = 1,
    max = 10,
    winningNum = getWinNum(min, max),
    guessesLeft = 3;

// ui game
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})


// listen for guess
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value)

    //validat input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    // check if won
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, You Win!`)
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            gameOver(false, `You Lose. ${winningNum} was the number`)
        } else {
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct. You have ${guessesLeft} remaining`, 'red')
        }
    }
})

// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    won ? color = 'green' : color = 'red'

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color)

    guessBtn.value = 'Play Again';
    guessBtn.classList += 'play-again'
}

function getWinNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}