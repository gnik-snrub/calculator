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
    }
}