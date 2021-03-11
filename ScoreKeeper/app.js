const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

player1.addEventListener('click', scoreCard)
player2.addEventListener('click', scoreCard)

let player1Total = 0;
let player2Total = 0;

function scoreCard(e) {
    e.target.id === "player1" ? player1Total++ : player2Total++;
    console.log(player1Total, player2Total);
}