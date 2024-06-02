import right from "./right.js";
export { default as right } from "./right.js";
import resolved from "./.then.js";
var id=(x)=>x;
var call=(x,y)=>x&&x.constructor===Function?x(y):y(x);

export var left=(x)=>{
  var y=resolved(x&&x.then?(_,e)=>right(x.then(e,e)):(_,e)=>right(e?call(e,x):y));
  return y;
}

export var bimap = (y) => resolved((x)=>right(x.then?x.then(id,y):x(id,y)));
export var alt   = (y) => resolved((x)=>right(x.then?x.then(id,()=>y):x(id,()=>right(y))));

var either = Object.setPrototypeOf(bimap, {
  left,
  right,
  alt,
});
export default either;
