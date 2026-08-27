const display=document.getElementById("display"),scientificDisplay=document.getElementById("scientific-display");

function appendTo(input,value){input.value+=value}
function clearInput(input){input.value=""}
function backspaceInput(input){input.value=input.value.slice(0,-1)}
function evaluateExpression(input){try{let e=input.value.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-").replace(/\^/g,"**").replace(/π/g,"Math.PI").replace(/\be\b/g,"Math.E");let result=Function(`"use strict";return (${e})`)();input.value=typeof result==="number"?cleanNumber(result):result}catch(err){input.value="Error"}}

function bindButtons(container,input,scientific=false){
container.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
 const v=btn.dataset.value??btn.textContent,a=btn.dataset.action;
 if(v==="="){evaluateExpression(input);return}
 if(v==="C"){clearInput(input);return}
 if(v==="⌫"){backspaceInput(input);return}
 if(v==="±"){input.value=input.value.startsWith("-")?input.value.slice(1):"-"+input.value;return}
 if(a){
   if(a==="sin"||a==="cos"||a==="tan"||a==="asin"||a==="acos"||a==="atan"||a==="ln"||a==="log"||a==="sqrt"||a==="cbrt"||a==="abs"){appendTo(input,a+"(");return}
   if(a==="square"){appendTo(input,"^2");return}
   if(a==="power"){appendTo(input,"^");return}
   if(a==="factorial"){appendTo(input,"!");return}
   if(a==="nCr"){appendTo(input,"nCr(");return}
   if(a==="nPr"){appendTo(input,"nPr(");return}
 }
 appendTo(input,v);
}));
}

const basicButtons=document.getElementById("basic-buttons");
basicButtons.innerHTML=`<button>(</button><button>)</button><button>%</button><button class="operator">÷</button><button>7</button><button>8</button><button>9</button><button class="operator">×</button><button>4</button><button>5</button><button>6</button><button class="operator">−</button><button>1</button><button>2</button><button>3</button><button class="operator">+</button><button class="special">⌫</button><button>0</button><button>.</button><button class="special">C</button><button class="equals">=</button>`;
const scientificButtons=document.getElementById("scientific-buttons");
scientificButtons.innerHTML=`<button data-action="sin">sin</button><button data-action="cos">cos</button><button data-action="tan">tan</button><button data-action="asin">asin</button><button data-action="acos">acos</button><button data-action="atan">atan</button><button data-action="ln">ln</button><button data-action="log">log</button><button data-action="sqrt">√</button><button data-action="cbrt">∛</button><button data-action="square">x²</button><button data-action="power">xʸ</button><button data-value="π">π</button><button data-value="e">e</button><button data-action="factorial">!</button><button data-action="nCr">nCr</button><button data-action="nPr">nPr</button><button data-action="abs">|x|</button><button>(</button><button>)</button><button>7</button><button>8</button><button>9</button><button>÷</button><button>4</button><button>5</button><button>6</button><button>×</button><button>1</button><button>2</button><button>3</button><button>−</button><button>±</button><button>0</button><button>.</button><button>+</button><button class="special">⌫</button><button class="special">C</button><button class="equals">=</button>`;
bindButtons(basicButtons,display);
bindButtons(scientificButtons,scientificDisplay,true);

document.addEventListener("keydown",e=>{
 const active=document.querySelector(".tab-content.active");
 const input=active?.querySelector("input[readonly]");
 if(!input)return;
 if("0123456789+-*/().%^".includes(e.key)){e.preventDefault();appendTo(input,e.key)}
 else if(e.key==="Enter"){e.preventDefault();evaluateExpression(input)}
 else if(e.key==="Backspace"){e.preventDefault();backspaceInput(input)}
 else if(e.key==="Escape"){e.preventDefault();clearInput(input)}
});

document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
 document.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active"));
 tab.classList.add("active");document.getElementById(tab.dataset.tab).classList.add("active");
}));

function val(id){return Number(document.getElementById(id).value)}
function set(id,text){document.getElementById(id).textContent=text}

document.getElementById("circle-calc").onclick=()=>{const r=val("circle-radius");set("circle-result",`Area: ${cleanNumber(circleArea(r))}<br>Circumference: ${cleanNumber(circleCircumference(r))}`)}
document.getElementById("rect-calc").onclick=()=>{const w=val("rect-width"),h=val("rect-height");set("rect-result",`Area: ${cleanNumber(rectangleArea(w,h))}<br>Perimeter: ${cleanNumber(rectanglePerimeter(w,h))}`)}
document.getElementById("tri-calc").onclick=()=>{const b=val("tri-base"),h=val("tri-height");set("tri-result",`Area: ${cleanNumber(triangleArea(b,h))}`)}
document.getElementById("sphere-calc").onclick=()=>{const r=val("sphere-radius");set("sphere-result",`Volume: ${cleanNumber(sphereVolume(r))}<br>Surface area: ${cleanNumber(sphereSurfaceArea(r))}`)}

document.getElementById("si-calc").onclick=()=>{const p=val("si-principal"),r=val("si-rate"),t=val("si-time");set("si-result",`Interest: ${cleanNumber(simpleInterest(p,r,t))}<br>Total: ${cleanNumber(simpleTotal(p,r,t))}`)}
document.getElementById("ci-calc").onclick=()=>{const p=val("ci-principal"),r=val("ci-rate"),t=val("ci-time"),n=val("ci-n");set("ci-result",`Interest: ${cleanNumber(compoundInterest(p,r,t,n))}<br>Total: ${cleanNumber(compoundTotal(p,r,t,n))}`)}
document.getElementById("loan-calc").onclick=()=>{const p=val("loan-principal"),r=val("loan-rate"),m=val("loan-months");set("loan-result",`Monthly payment: ${cleanNumber(loanPayment(p,r,m))}`)}

document.getElementById("stats-calculate").onclick=()=>{
 const a=parseNumbers(document.getElementById("stats-input").value),q=a.length?quartiles(a):null;
 const out=document.getElementById("stats-results");out.innerHTML="";
 if(!a.length){out.innerHTML='<div class="stat-card">No valid numbers.</div>';return}
 const data=[["Count",a.length],["Mean",cleanNumber(statsMean(a))],["Median",cleanNumber(statsMedian(a))],["Mode",statsModes(a).join(", ")||"None"],["Min",statsMin(a)],["Max",statsMax(a)],["Range",statsRange(a)],["Q1",cleanNumber(q.q1)],["Q3",cleanNumber(q.q3)],["Std Dev",cleanNumber(statsStdDev(a))],["Sample SD",cleanNumber(statsStdDev(a,true))],["Variance",cleanNumber(statsVariance(a))]];
 data.forEach(([k,v])=>out.innerHTML+=`<div class="stat-card"><strong>${k}</strong><span>${v}</span></div>`);
 const canvas=document.getElementById("stats-chart"),ctx=canvas.getContext("2d"),w=canvas.width=canvas.clientWidth*2,h=canvas.height=canvas.clientHeight*2;ctx.scale(2,2);const cw=canvas.clientWidth,ch=canvas.clientHeight;ctx.clearRect(0,0,cw,ch);const max=Math.max(...a),bar=cw/a.length; a.forEach((x,i)=>{const bh=max?x/max*(ch-30):0;ctx.fillRect(i*bar,ch-bh,Math.max(2,bar-3),bh)});
};
document.getElementById("stats-clear").onclick=()=>{document.getElementById("stats-input").value="";document.getElementById("stats-results").innerHTML=""};

document.getElementById("data-analyze").onclick=()=>{const r=analyzeData(document.getElementById("data-input").value);document.getElementById("data-output").textContent=r?JSON.stringify(r,null,2):"No valid data."};
document.getElementById("data-sort").onclick=()=>{const a=parseNumbers(document.getElementById("data-input").value).sort((a,b)=>a-b);document.getElementById("data-output").textContent=a.join(", ")};
document.getElementById("data-clear").onclick=()=>{document.getElementById("data-input").value="";document.getElementById("data-output").textContent=""};
