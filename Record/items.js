export default(y)=>(x)=>y.reduce((o,k)=>((k in x)&&(o.push(x[k])),o),[])
