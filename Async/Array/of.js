import r from "../Monad/right.js";import p from"../Monad/promise.js";export default(x)=>p((y,e)=>{var i=x.length,o=new Array(i),n=i||y(o);while(i--)r(x[i])(((i)=>(x)=>(o[i]=x,--n||y(o)))(i),(x)=>(e(x),i=0),);});