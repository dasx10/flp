import{left,right}from"./either.js";
var then=(x)=>(x.then=x);
export default(x)=>{
  var i,y=right(new Promise((o,e)=>x((x)=>(i=right(x),o(x)),(x)=>(i=left(x),e(x)))));
  return i||then((x,e)=>i?i(x,e):y(x,e));
};
