import{left,right}from"./either.js";
var promise=(x)=>{var i=("then" in x && x.then===x)&&x,y,e;i||x((x)=>(i=right(x),y&&y(x)),(x)=>(i=left(x),e&&e(x)));return i||(i=(new Promise((x,n)=>(y=x,e=n))),i.catch(Boolean),i=right(i));};
export default promise;
