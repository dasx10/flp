import{left}from"../Monad/either.js";export default(y)=>(x)=>x.then((x)=>(y(),x),(x)=>(y(),left(x)));
