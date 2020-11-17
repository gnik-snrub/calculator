function add (a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(val, mult) {
	let pow = val;
	for (i = 1; i < mult; i++) {
		pow *= val;
	}
	return pow;
}

function factorial(num) {
	if (num == 0 || num == 1) { return 1; }
	for (i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num;
}

function operate(numOne, numTwo, operator) {
    switch (operator) {
        case "add":
            return add(numOne, numTwo);
        case "sub":
            return subtract(numOne, numTwo);
        case "mul":
            return multiply(numOne, numTwo);
        case "div":
            return divide(numOne, numTwo);
        case "pow":
            return power(numOne, numTwo);
        default:
            return factorial(numOne);
    }
}

let dispLast = '';
let dispCurrent = '';

const dispLastText = document.querySelector('.display-last');
const dispCurrentText = document.querySelector('.display-current');

function displayUpdate() {
    dispLastText.textContent = dispLast;
    dispCurrentText.textContent = dispCurrent;
}

let clear = document.querySelector('.clear');
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    dispLast = '';
    dispCurrent = '';
    displayUpdate();
}

const nums = document.querySelectorAll('.num');
nums.forEach(btn => btn.addEventListener('click', function() { addNum(btn.textContent) }));

function addNum(val) {
    dispCurrent += `${val}`;
    displayUpdate();
}