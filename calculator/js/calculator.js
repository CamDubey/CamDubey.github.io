let result = document.getElementById("result");

function displayTwoPlusTwo() {
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2;
}

function dislpayThreeTimesFour() {
    result.innerHTML = 3 * 4;
}

function displayEighteenMinusEight() {
    result.innerHTML = 18 - 8;
}

function displayReset() {
    result.innerHTML = 0;
}

function displayMultiply() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value * input2.value;
}

displayMultiply();

function displayDivide() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value / input2.value;
}

displayAdd();

function displayAdd() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

displayMultiply();

function displaySubtract() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value - input2.value;
}

displayMultiply();