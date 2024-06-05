import right from "./right.js";
var o=(x)=>(x.then=x);var id=(x)=>x;
export var left=(x)=>{var y=o(x&&x.then?(_,e)=>right(x.then(e,e)):(_,e)=>right(e?e.constructor===Function?e(x):x(e):y));return y;}
export var bimap = (y) => o((x)=>right(x.then?x.then(id,y):x(id,y)));
export var alt   = (y) => o((x)=>right(x.then?x.then(id,()=>y):x(id,()=>right(y))));

var either = Object.setPrototypeOf(bimap, {
  left,
  right,
  alt,
});
export default either;
export { default as right } from "./right.js";
