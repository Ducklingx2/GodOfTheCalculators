const PI=Math.PI,E=Math.E;
function sin(x){return Math.sin(x*PI/180)}
function cos(x){return Math.cos(x*PI/180)}
function tan(x){return Math.tan(x*PI/180)}
function asin(x){return Math.asin(x)*180/PI}
function acos(x){return Math.acos(x)*180/PI}
function atan(x){return Math.atan(x)*180/PI}
function sinh(x){return Math.sinh(x)}
function cosh(x){return Math.cosh(x)}
function tanh(x){return Math.tanh(x)}
function sqrt(x){return Math.sqrt(x)}
function cbrt(x){return Math.cbrt(x)}
function nthRoot(x,n){return x**(1/n)}
function ln(x){return Math.log(x)}
function log(x){return Math.log10(x)}
function logBase(x,b){return Math.log(x)/Math.log(b)}
function exp(x){return Math.exp(x)}
function exp10(x){return 10**x}
function factorial(n){if(!Number.isInteger(n)||n<0)throw new Error("Factorial requires a non-negative integer");let r=1;for(let i=2;i<=n;i++)r*=i;return r}
function nPr(n,r){if(r<0||r>n)throw new Error("Invalid permutation");return factorial(n)/factorial(n-r)}
function nCr(n,r){if(r<0||r>n)throw new Error("Invalid combination");return factorial(n)/(factorial(r)*factorial(n-r))}
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a}
function lcm(a,b){return Math.abs(a*b)/gcd(a,b)}
function isPrime(n){if(!Number.isInteger(n)||n<2)return false;for(let i=2;i<=Math.sqrt(n);i++)if(n%i===0)return false;return true}
function radians(d){return d*PI/180}
function degrees(r){return r*180/PI}
