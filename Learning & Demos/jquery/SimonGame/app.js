const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userChosenColor;
let userPattern = [];
let level = 0;
let currentPosition;

function nextSequence() {
    let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)]
    gamePattern.push(randomChosenColor);
    playSequence()
}

function playSequence() {
    for (let i = 0; i < gamePattern.length; i++) {
        setTimeout(function () {
            console.log(gamePattern[i])
            animateButtonFlash(gamePattern[i])
            playSound(gamePattern[i]);
        }, 1200 * i)
    }


}


function userSelection(color) {
    userChosenColor = color;
    playSound(color);
    animateButtonPress(color)
    userPattern.push(color);
    checkAnswer(currentPosition);
}

function playSound(color) {
    const audio = new Audio(`./sounds/${color}.mp3`)
    audio.play();
}

function animateButtonFlash(color) {
    $(`#${color}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function animateButtonPress(color) {
    $(`#${color}`).addClass('pressed')
    setTimeout(() => { $(`#${color}`).removeClass('pressed') }, 100)
}

function startGame() {
    if (level === 0) {
        nextSequence()
        currentPosition = 0;
    }
}

function checkAnswer() {
    console.log(currentPosition, 'current position')
    if (gamePattern[currentPosition] === userPattern[currentPosition]) {
        console.log('correct')
        console.log(userPattern)
        console.log(gamePattern)
        console.log(currentPosition)
        console.log(gamePattern.length - 1)
        if (currentPosition === gamePattern.length - 1) {
            console.log('new level-------------')
            level++;
            $("#level-title").text(`Level ${level}`);
            setTimeout(() => { nextSequence() }, 500)
            userPattern = [];
            console.log(`current position ${currentPosition} changed`)
            currentPosition = 0;
        } else {
            currentPosition++
        }

        console.log(currentPosition, 'end of if block')
    } else {
        console.log('wrong')
        console.log(userPattern)
        console.log(gamePattern)
    }

}


$("div[type='button']").on("click", function () {
    userSelection(this.id)
})

$("body").keypress(function () {

    startGame()
});