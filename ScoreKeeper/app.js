const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const playUntil = document.querySelector('#playTill');


player1.addEventListener('click', scoreCard)
player2.addEventListener('click', scoreCard)
playUntil.addEventListener('change', gameTotal);

let player1Total = 0;
let player2Total = 0;
let game = 0;

function scoreCard(e) {
    e.target.id === "player1" ? player1Total++ : player2Total++;
    console.log(player1Total, player2Total);
    isWinner();
}

function gameTotal(e) {
    game = parseInt(e.target.value);
}

function isWinner() {
    if ((player1Total + player2Total) === game) {
        if (player1Total > player2Total) {
            console.log('player 1 wins');
            player1.disabled = true;
            player2.disabled = true;
            newGameBtn();
        } else {
            console.log('player 2 wins');
            player1.disabled = true;
            player2.disabled = true;
            newGameBtn();
        }
    }

}

function newGameBtn() {
    const gameContainer = document.querySelector("#container");
    const newGameBtn = document.createElement('button');
    newGameBtn.innerText = "New Game?";
    newGameBtn.id = "newgame";
    gameContainer.appendChild(newGameBtn);
    const anotherGame = document.querySelector('#newgame');
    anotherGame.addEventListener('click', gameReset);

};
function gameReset() {

    playUntil.value = game;
    player1.disabled = false;
    player2.disabled = false;
    player2Total = 0;
    player1Total = 0;
    // refactor later want to see if this works
    const anotherGame2 = document.querySelector('#newgame');
    anotherGame2.remove();
}