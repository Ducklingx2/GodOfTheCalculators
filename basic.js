// =========================
// Basic Math Functions
// =========================


// Addition
function add(a, b) {
    return a + b;
}


// Subtraction
function subtract(a, b) {
    return a - b;
}


// Multiplication
function multiply(a, b) {
    return a * b;
}


// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}


// Modulo (remainder)
function modulo(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a % b;
}


// Power
function power(a, b) {
    return a ** b;
}


// Square
function square(x) {
    return x ** 2;
}


// Cube
function cube(x) {
    return x ** 3;
}


// Reciprocal (1/x)
function reciprocal(x) {
    if (x === 0) {
        throw new Error("Cannot divide by zero");
    }

    return 1 / x;
}


// Absolute value
function absolute(x) {
    return Math.abs(x);
}


// Percentage
function percentage(x) {
    return x / 100;
}


// Negation
function negate(x) {
    return -x;
}


// Average of numbers
function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}


// Sum of numbers
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}


// Product of numbers
function product(...numbers) {
    return numbers.reduce((a, b) => a * b, 1);
}
