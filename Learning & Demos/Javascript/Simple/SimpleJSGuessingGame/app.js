let max = parseInt(prompt("Enter the maximum number"));

while (!max) {
    max = parseInt(prompt("Silly You didnt enter a number. Enter the maximum number"));
}

const correctAnswer = Math.floor(Math.random() * max + 1);
console.log("correct guess: " + correctAnswer);
let guess = parseInt(prompt("Enter your first guess"));
console.log("user guess: " + guess);
let attempts = 1;
debugger;
while (parseInt(guess) !== correctAnswer) {
    attempts++;
    if (attempts == 5) {
        break;
    }
    if (guess > correctAnswer) {
        guess = parseInt(prompt("too high - guess again"));
    } else {
        guess = parseInt(prompt("too low - guess again"));
    }
}
if (guess !== correctAnswer) {
    alert("You Lose...maybe try again?");
} else {
    alert("Congrats you won... champion");
}



