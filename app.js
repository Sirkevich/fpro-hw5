function getRandomNumber(x) {
    return Math.floor(Math.random() * (x - 1) + 1);
}

function getUserNumber() {
    return prompt('Enter your number from 1 to 5');
}

function Game() {
    const randomNumber = getRandomNumber(5);
    let userNumber;
    do {
        userNumber = getUserNumber();
    } while (+userNumber !== randomNumber && userNumber !== null);
    return +userNumber === randomNumber;
}

function runGame() {

    if (Game()) {
        confirm('Yo win');
    } else {
        confirm('You lose');
    }
}

runGame();