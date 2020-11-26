const randomNumber = +Math.floor(Math.random() * (3 - 1) + 1);
let userNumber;

function loop() {

    while (userNumber !== null && +userNumber !== +randomNumber) {
        userNumber = prompt('Угадай число, которое я задумал от 1 до 10');
    }
    alert('Сгенерированое число было ' + randomNumber);

}

function unloop() {
    userNumber = prompt('Угадай число, которое я задумал от 1 до 10');
    let result = +userNumber === +randomNumber;
    alert(result);
}

loop();
unloop();