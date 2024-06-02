import then from"./.then.js";
import right from "./right.js";
var id=(x)=>x;
export var left=(x)=>{
  var y=then(x&&x.then?(_,e)=>right(x.then(e,e)):(_,e)=>right(e?e.constructor===Function?e(x):x(e):y));
  return y;
}

export var bimap = (y) => then((x)=>right(x.then?x.then(id,y):x(id,y)));
export var alt   = (y) => then((x)=>right(x.then?x.then(id,()=>y):x(id,()=>right(y))));

var either = Object.setPrototypeOf(bimap, {
  left,
  right,
  alt,
});
export default either;
export { default as right } from "./right.js";
