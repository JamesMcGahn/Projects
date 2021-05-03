'use strict'
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = 'ROCK';
const RESULT_DRAW = 'Tie Game';
const PLAYER_WINS = 'Player Wins';
const CPU_WINS = 'CPU Wins';
let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`).toUpperCase();

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== PAPER
    ) {
        alert(`Invalid choise we choose ${DEFAULT_CHOICE} for you`)
        return DEFAULT_CHOICE;
    }
    return selection
}

const getComputerChoice = function () {
    const choices = [ROCK, PAPER, SCISSORS]
    const random = Math.floor(Math.random() * 3)
    return choices[random]
}

const getWinner = function (cpuChoice, playerChoice) {
    if (cpuChoice === playerChoice) {
        return RESULT_DRAW;
    } else if (cpuChoice === ROCK && playerChoice === PAPER ||
        cpuChoice === PAPER && playerChoice === SCISSORS ||
        cpuChoice === SCISSORS && playerChoice === ROCK
    ) {
        return PLAYER_WINS;
    } else {
        return CPU_WINS;
    }
}



function startGame() {
    const playerSelection = getPlayerChoice();
    gameIsRunning = true
    const computerSelection = getComputerChoice();
    const winner = getWinner(computerSelection, playerSelection)
    console.log(`CPU selection ${computerSelection}, Your selection ${playerSelection}`)
    console.log(winner)
}


startGameBtn.addEventListener('click', startGame);