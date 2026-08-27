function simpleInterest(p,r,t){return p*(r/100)*t}
function simpleTotal(p,r,t){return p+simpleInterest(p,r,t)}
function compoundTotal(p,r,t,n){return p*(1+r/100/n)**(n*t)}
function compoundInterest(p,r,t,n){return compoundTotal(p,r,t,n)-p}
function loanPayment(p,annualRate,months){const r=annualRate/100/12;if(r===0)return p/months;return p*r*(1+r)**months/((1+r)**months-1)}
function futureValue(p,r,t){return p*(1+r/100)**t}
function roi(gain,cost){return (gain-cost)/cost*100}
