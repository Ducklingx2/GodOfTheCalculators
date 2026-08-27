function add(a,b){return a+b}
function subtract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){if(b===0)throw new Error("Cannot divide by zero");return a/b}
function modulo(a,b){if(b===0)throw new Error("Cannot divide by zero");return a%b}
function power(a,b){return a**b}
function square(x){return x**2}
function cube(x){return x**3}
function negate(x){return -x}
function reciprocal(x){if(x===0)throw new Error("Cannot divide by zero");return 1/x}
function absolute(x){return Math.abs(x)}
function percentage(x){return x/100}
function sum(...x){return x.reduce((a,b)=>a+b,0)}
function product(...x){return x.reduce((a,b)=>a*b,1)}
function average(...x){return x.length?sum(...x)/x.length:0}
function cleanNumber(x){if(typeof x!=="number"||!Number.isFinite(x))return x;return Number(x.toFixed(10))}
