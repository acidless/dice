function randomDice() {
    return Math.floor(Math.random() * 6 + 1);
}

function appendDot(element, times) {
    element.classList.add(`dice-${times}`);

    for (let i = 0; i < times; i++) {
        const div = document.createElement('div');
        div.className = 'dot';
        element.insertAdjacentElement("afterbegin", div);
    }
}

function onThrow() {
    const firstDice = document.querySelector("#firsrt-dice")
    const secondDice = document.querySelector("#second-dice")

    firstDice.innerHTML = "";
    firstDice.classList.remove(firstDice.classList[1]);

    secondDice.innerHTML = "";
    secondDice.classList.remove(secondDice.classList[1]);

    const firstNumber = randomDice();
    const secondNumber = randomDice();


    appendDot(firstDice, firstNumber);
    appendDot(secondDice, secondNumber);

    const gameResult = document.querySelector("#game-result")
    if (firstNumber > secondNumber) {
        gameResult.textContent = "1st Player Won!"
    } else if (firstNumber < secondNumber) {
        gameResult.textContent = "2st Player Won!"
    } else {
        gameResult.textContent = "Draw!"
    }
}