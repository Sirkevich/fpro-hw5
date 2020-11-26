const randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
let userNumber;

function createGame() {

    while (userNumber !== null && +userNumber !== randomNumber) {
        userNumber = prompt('Guess my number from 1 to 3');
    }
}

function getResultOfGame() {
    if (+userNumber === randomNumber) {
        alert('You are right, my nymber is ' + randomNumber);
    } 
}

createGame();
getResultOfGame();
