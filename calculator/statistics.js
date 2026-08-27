function parseNumbers(text){return text.split(/[\s,;]+/).map(Number).filter(Number.isFinite)}
function statsMean(a){return a.length?sum(...a)/a.length:NaN}
function statsMedian(a){if(!a.length)return NaN;const x=[...a].sort((a,b)=>a-b),m=Math.floor(x.length/2);return x.length%2?x[m]:(x[m-1]+x[m])/2}
function statsModes(a){if(!a.length)return[];const c=new Map();a.forEach(x=>c.set(x,(c.get(x)||0)+1));const max=Math.max(...c.values());return max===1?[]:[...c].filter(([,v])=>v===max).map(([k])=>k)}
function statsVariance(a,sample=false){if(a.length-(sample?1:0)<=0)return NaN;const m=statsMean(a);return a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-(sample?1:0))}
function statsStdDev(a,sample=false){return Math.sqrt(statsVariance(a,sample))}
function statsMin(a){return Math.min(...a)}
function statsMax(a){return Math.max(...a)}
function statsRange(a){return statsMax(a)-statsMin(a)}
function quartiles(a){const x=[...a].sort((a,b)=>a-b),m=statsMedian(x),mid=Math.floor(x.length/2);const lo=x.slice(0,mid),hi=x.slice(x.length%2?mid+1:mid);return{q1:statsMedian(lo),q2:m,q3:statsMedian(hi)}}
function covariance(a,b){if(a.length!==b.length||!a.length)return NaN;const am=statsMean(a),bm=statsMean(b);return a.reduce((s,x,i)=>s+(x-am)*(b[i]-bm),0)/a.length}
function correlation(a,b){const den=statsStdDev(a)*statsStdDev(b);return covariance(a,b)/den}
