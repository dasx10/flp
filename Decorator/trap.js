export default(y)=>{var o=new Map;return(x)=>o.get(x)||o.set(x,y(x).finally(()=>o.delete(x))).get(x);};
