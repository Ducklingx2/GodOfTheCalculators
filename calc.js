const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

function calculate() {
    try {
        let expression = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/\^/g, "**");

        display.value = Function('"use strict"; return (' + expression + ')')();
    } catch {
        display.value = "Error";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.textContent;

        switch (value) {

            case "=":
                calculate();
                break;

            case "C":
                display.value = "";
                break;

            default:
                display.value += value;
        }

    });
});

document.addEventListener("keydown", e => {

    if (
        "0123456789+-*/().%^".includes(e.key)
    ) {
        display.value += e.key;
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (e.key === "Escape") {
        display.value = "";
    }

});
