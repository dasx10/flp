var n=(k,o,y)=>(x)=>((o[k]=x),y(o));import r from "../Monad/right.js";import p from"../Monad/promise.js";export default(y)=>(y=r(y),(x)=>p((z,e)=>{var k=x.length,o=new Array(k),i=k?k-1:z(o);var l=(o)=>(--i||z(o)),f=(x)=>(k=0,e(x));while(k--)y(x[k])(n(k,o,l),f);}));
