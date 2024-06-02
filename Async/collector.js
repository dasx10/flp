import all from"./all.js";
export default(x)=>all(Object.values(x))((o)=>Object.fromEntries(Object.keys(x).map((y,i)=>[y,o[i]])));
