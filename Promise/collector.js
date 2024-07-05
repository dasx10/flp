var v=Object.values,k=Object.keys,f=Object.fromEntries;export default(x)=>Promise.all(v(x)).then((o)=>f(k(x).map((n,i)=>[n,o[i]])));
