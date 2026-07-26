// =========================
// Scientific Math Functions
// =========================


// Constants

const PI = Math.PI;
const E = Math.E;


// =========================
// Trigonometry (Degrees)
// =========================

function sin(x) {
    return Math.sin(x * PI / 180);
}

function cos(x) {
    return Math.cos(x * PI / 180);
}

function tan(x) {
    return Math.tan(x * PI / 180);
}


// Inverse Trigonometry

function asin(x) {
    return Math.asin(x) * 180 / PI;
}

function acos(x) {
    return Math.acos(x) * 180 / PI;
}

function atan(x) {
    return Math.atan(x) * 180 / PI;
}


// =========================
// Hyperbolic Functions
// =========================

function sinh(x) {
    return Math.sinh(x);
}

function cosh(x) {
    return Math.cosh(x);
}

function tanh(x) {
    return Math.tanh(x);
}


// =========================
// Roots
// =========================

function sqrt(x) {
    return Math.sqrt(x);
}

function cubeRoot(x) {
    return Math.cbrt(x);
}

function nthRoot(x, n) {
    return x ** (1 / n);
}


// =========================
// Powers
// =========================

function square(x) {
    return x ** 2;
}

function cube(x) {
    return x ** 3;
}

function exponent(x, y) {
    return x ** y;
}


// =========================
// Logarithms
// =========================

function ln(x) {
    return Math.log(x);
}

function log10(x) {
    return Math.log10(x);
}

function logBase(x, base) {
    return Math.log(x) / Math.log(base);
}


// =========================
// Exponential
// =========================

function exp(x) {
    return Math.exp(x);
}

function tenPower(x) {
    return 10 ** x;
}


// =========================
// Factorials
// =========================

function factorial(n) {

    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Invalid factorial");
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}


// =========================
// Combinations & Permutations
// =========================

function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}


function combination(n, r) {
    return factorial(n) /
        (factorial(r) * factorial(n - r));
}


// =========================
// Absolute / Rounding
// =========================

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


// =========================
// Angle Conversion
// =========================

function radians(degrees) {
    return degrees * PI / 180;
}


function degrees(radians) {
    return radians * 180 / PI;
}


// =========================
// Scientific Notation
// =========================

function scientificNotation(x) {
    return x.toExponential();
}


// =========================
// Random
// =========================

function random() {
    return Math.random();
}


function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
