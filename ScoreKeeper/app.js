let player1Total = 0;
let player2Total = 0;
let game = 0;

const scoreKeeper = {
    scoreCard: function (e) {
        e.target.id === "player1" ? player1Total++ : player2Total++;
        console.log(player1Total, player2Total);
        scoreKeeper.isWinner();
        scoreKeeper.updateBoard();
    },
    updateBoard: function () {
        player1Board.innerText = `${player1Total}`;
        player2Board.innerText = `${player2Total}`;
    },
    gameTotal: function gameTotal(e) {
        game = parseInt(e.target.value);
    },
    isWinner: function () {
        if ((player1Total + player2Total) === game) {
            if (player1Total > player2Total) {
                console.log('player 1 wins');
                player1.disabled = true;
                player2.disabled = true;
                scoreKeeper.newGameBtn();
            } else {
                console.log('player 2 wins');
                player1.disabled = true;
                player2.disabled = true;
                scoreKeeper.newGameBtn();
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
        scoreKeeper.updateBoard();
    }

}
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const playUntil = document.querySelector('#playTill');
const player1Board = document.querySelector('#play1board');
const player2Board = document.querySelector('#play2board');


player1.addEventListener('click', scoreKeeper.scoreCard)
player2.addEventListener('click', scoreKeeper.scoreCard)
playUntil.addEventListener('change', scoreKeeper.gameTotal);