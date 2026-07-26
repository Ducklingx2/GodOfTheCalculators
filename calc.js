// =========================
// Calculator Controller
// =========================

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

// -------------------------
// Display
// -------------------------

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

// -------------------------
// Calculate
// -------------------------

function calculate() {
    try {
        let expression = display.value;

        expression = expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/\^/g, "**");

        display.value = Function(`"use strict"; return (${expression})`)();

    } catch {
        display.value = "Error";
    }
}

// -------------------------
// Buttons
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
                break;

        }

    });

});

// -------------------------
// Keyboard
// -------------------------

document.addEventListener("keydown", e => {

    const allowed = "0123456789+-*/().%^";

    if (allowed.includes(e.key)) {
        e.preventDefault();
        append(e.key);
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace") {
        e.preventDefault();
        backspace();
    }

    if (e.key === "Escape") {
        e.preventDefault();
        clearDisplay();
    }

});
