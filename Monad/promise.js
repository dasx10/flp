import{left,right}from"./either.js";export default(x)=>{var i,y,e;x((x)=>(i=right(x),y&&y(x)),(x)=>(i=left(x),e&&e(x)));return i||(i=(new Promise((x,n)=>(y=x,e=n))),i.catch(Boolean),i=right(i));};
