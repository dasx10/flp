import{left}from"../Monad/either.js";export default(y)=>{var o=new Map,z;return(x)=>o.get(x)||o.set(x,(y(x))((y)=>(o.delete(x),y),(e)=>(o.delete(x),left(e)))).get(x);};
