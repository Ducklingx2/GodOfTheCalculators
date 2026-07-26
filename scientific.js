// Constants
const PI = Math.PI;
const E = Math.E;

// Trigonometry (Degrees)
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

// Hyperbolic
function sinh(x) {
    return Math.sinh(x);
}

function cosh(x) {
    return Math.cosh(x);
}

function tanh(x) {
    return Math.tanh(x);
}

// Powers
function square(x) {
    return x ** 2;
}

function cube(x) {
    return x ** 3;
}

function power(x, y) {
    return x ** y;
}

// Roots
function sqrt(x) {
    return Math.sqrt(x);
}

function cbrt(x) {
    return Math.cbrt(x);
}

// Logarithms
function ln(x) {
    return Math.log(x);
}

function log(x) {
    return Math.log10(x);
}

// Exponentials
function exp(x) {
    return Math.exp(x);
}

// Misc
function abs(x) {
    return Math.abs(x);
}

function ceil(x) {
    return Math.ceil(x);
}

function floor(x) {
    return Math.floor(x);
}

function round(x) {
    return Math.round(x);
}

// Factorial
function factorial(n) {
    if (n < 0) return NaN;
    if (!Number.isInteger(n)) return NaN;

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Combinations
function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Permutations
function nPr(n, r) {
    return factorial(n) / factorial(n - r);
}

// Angle Conversion
function degrees(rad) {
    return rad * 180 / PI;
}

function radians(deg) {
    return deg * PI / 180;
}
