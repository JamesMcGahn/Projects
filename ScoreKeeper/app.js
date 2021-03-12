let player1Total = 0;
let player2Total = 0;
let game = 0;
let match = 1;
let player1Wins = 0;
let player2Wins = 0;

const scoreKeeper = {
    scoreCard: function (e) {
        e.target.id === "player1" ? player1Total++ : player2Total++;

        scoreKeeper.isWinner();
        scoreKeeper.updateBoard();
    },
    updateBoard: function () {
        player1Board.innerText = `${player1Total}`;
        player2Board.innerText = `${player2Total}`;
        if (player1Total + player2Total !== game) {
            msgBoard.innerText = "VS."
        }
        matchBoard.innerHTML = `<div> <h2> Match ${match}</h2> <p>Player 1 -- ${player1Wins} -- Player 2 ${player2Wins}</p> </div>`
    },
    gameTotal: function gameTotal(e) {
        game = parseInt(e.target.value);

        player1.disabled = false;
        player2.disabled = false;

    },
    isWinner: function () {
        if (player1Total === game || player2Total === game) {
            if (player1Total > player2Total) {
                console.log('player 1 wins');
                player1.disabled = true;
                player1.style.backgroundColor = "green";
                player2.style.backgroundColor = "red";
                player2.disabled = true;
                msgBoard.innerText = "Player 1 Wins"
                scoreKeeper.newGameBtn();
                player1Wins++;
                match++
            } else {
                console.log('player 2 wins');
                player1.disabled = true;
                player2.disabled = true;
                player2.style.backgroundColor = "green";
                player1.style.backgroundColor = "red";
                msgBoard.innerText = "Player 2 Wins"
                scoreKeeper.newGameBtn();
                player2Wins++;
                match++
            }
        }

    },
    newGameBtn: function () {
        const gameContainer = document.querySelector("#newGame-container");
        const newGameBtn = document.createElement('button');
        newGameBtn.innerText = "New Game?";
        newGameBtn.id = "newgame";
        newGameBtn.classList.add('newGamebtn');
        gameContainer.appendChild(newGameBtn);
        const anotherGame = document.querySelector('#newgame');
        anotherGame.addEventListener('click', scoreKeeper.gameReset);

    },
    gameReset: function () {

        playUntil.value = game;
        player1.disabled = false;
        player2.disabled = false;
        player2Total = 0;
        player1Total = 0;
        removeNewGameBtn = document.querySelector('#newgame');
        removeNewGameBtn.remove();

        player2.style.backgroundColor = "rgb(116, 116, 255)";
        player1.style.backgroundColor = "rgb(116, 116, 255)";

        scoreKeeper.updateBoard();
    }

}
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const playUntil = document.querySelector('#playTill');
const player1Board = document.querySelector('#play1board');
const player2Board = document.querySelector('#play2board');
const msgBoard = document.querySelector('#msg');
const matchBoard = document.querySelector('#matchcount');


player1.addEventListener('click', scoreKeeper.scoreCard)
player2.addEventListener('click', scoreKeeper.scoreCard)
playUntil.addEventListener('change', scoreKeeper.gameTotal);