import all from"./all.js";var v=Object.values,f=Object.fromEntries,k=Object.keys;export default(x)=>all(v(x))((o)=>f(k(x).map((y,i)=>[y,o[i]])));
