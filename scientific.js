// =====================================
// Scientific Calculator Library
// Version 1.0
// =====================================

// Constants

const PI = Math.PI;
const E = Math.E;

// =====================================
// Trigonometry (Degrees)
// =====================================

function sin(x) {
    return Math.sin(x * PI / 180);
}

function cos(x) {
    return Math.cos(x * PI / 180);
}

function tan(x) {
    return Math.tan(x * PI / 180);
}

// =====================================
// Inverse Trigonometry (Returns Degrees)
// =====================================

function asin(x) {
    return Math.asin(x) * 180 / PI;
}

function acos(x) {
    return Math.acos(x) * 180 / PI;
}

function atan(x) {
    return Math.atan(x) * 180 / PI;
}

// =====================================
// Hyperbolic
// =====================================

function sinh(x) {
    return Math.sinh(x);
}

function cosh(x) {
    return Math.cosh(x);
}

function tanh(x) {
    return Math.tanh(x);
}

// =====================================
// Powers
// =====================================

function square(x) {
    return x ** 2;
}

function cube(x) {
    return x ** 3;
}

function power(x, y) {
    return x ** y;
}

// =====================================
// Roots
// =====================================

function sqrt(x) {
    return Math.sqrt(x);
}

function cbrt(x) {
    return Math.cbrt(x);
}

function nthRoot(x, n) {
    return x ** (1 / n);
}

// =====================================
// Logarithms
// =====================================

function ln(x) {
    return Math.log(x);
}

function log(x) {
    return Math.log10(x);
}

function logBase(x, base) {
    return Math.log(x) / Math.log(base);
}

// =====================================
// Exponentials
// =====================================

function exp(x) {
    return Math.exp(x);
}

function exp10(x) {
    return 10 ** x;
}

// =====================================
// Factorial
// =====================================

function factorial(n) {

    if (!Number.isInteger(n))
        throw new Error("Factorial requires an integer.");

    if (n < 0)
        throw new Error("Negative factorial.");

    let result = 1;

    for (let i = 2; i <= n; i++)
        result *= i;

    return result;
}

// =====================================
// Combinations & Permutations
// =====================================

function nCr(n, r) {

    return factorial(n) /
        (factorial(r) * factorial(n - r));

}

function nPr(n, r) {

    return factorial(n) /
        factorial(n - r);

}

// =====================================
// Number Utilities
// =====================================

function abs(x) {
    return Math.abs(x);
}

function floor(x) {
    return Math.floor(x);
}

function ceil(x) {
    return Math.ceil(x);
}

function round(x) {
    return Math.round(x);
}

function truncate(x) {
    return Math.trunc(x);
}

function sign(x) {
    return Math.sign(x);
}

// =====================================
// Angle Conversion
// =====================================

function toRadians(degrees) {
    return degrees * PI / 180;
}

function toDegrees(radians) {
    return radians * 180 / PI;
}

// =====================================
// Miscellaneous
// =====================================

function reciprocal(x) {
    return 1 / x;
}

function random() {
    return Math.random();
}

function randomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// =====================================
// Percent Helpers
// =====================================

function percent(x) {
    return x / 100;
}

function increase(value, percent) {
    return value * (1 + percent / 100);
}

function decrease(value, percent) {
    return value * (1 - percent / 100);
}

// =====================================
// Greatest Common Divisor
// =====================================

function gcd(a, b) {

    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;

}

// =====================================
// Least Common Multiple
// =====================================

function lcm(a, b) {

    return Math.abs(a * b) / gcd(a, b);

}

// =====================================
// Prime Check
// =====================================

function isPrime(n) {

    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {

        if (n % i === 0)
            return false;

    }

    return true;

}

// =====================================
// Fibonacci
// =====================================

function fibonacci(n) {

    if (n < 0)
        throw new Error("Negative index.");

    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {

        let temp = a;
        a = b;
        b = temp + b;

    }

    return a;

}
