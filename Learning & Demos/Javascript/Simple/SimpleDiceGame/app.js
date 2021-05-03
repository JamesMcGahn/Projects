randomNumber1 = Math.floor(Math.random() * 6 + 1)
randomNumber2 = Math.floor(Math.random() * 6 + 1)

const player1 = document.querySelector('.img1');
const player2 = document.querySelector('.img2');
const titleMsg = document.querySelector('#title');

player1.setAttribute('src', `./images/dice${randomNumber1}.png`)
player2.setAttribute('src', `./images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    titleMsg.innerText = 'Player 1 Wins';
} else if (randomNumber1 < randomNumber2) {
    titleMsg.innerText = 'Player 2 Wins';
} else {
    titleMsg.innerText = 'It\'s a tie';
}