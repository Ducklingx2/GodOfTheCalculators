// =========================
// Basic Calculator
// =========================

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

// -------------------------
// Utilities
// -------------------------

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function append(value) {
    display.value += value;
}

function calculate() {
    try {
        let expression = display.value;

        expression = expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/\^/g, "**");

        display.value = Function('"use strict"; return (' + expression + ')')();
    } catch {
        display.value = "Error";
    }
}

// -------------------------
// Button Events
// -------------------------

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        switch (value) {

            case "=":
                calculate();
                break;

            case "C":
                clearDisplay();
                break;

            default:
                append(value);

        }

    });

});

// =========================
// Basic Operations
// =========================

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function reciprocal(x) {
    return 1 / x;
}

function absolute(x) {
    return Math.abs(x);
}

function percentage(x) {
    return x / 100;
}
