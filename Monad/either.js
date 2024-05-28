import right from "./right.js";
var resolved=(then)=>(then.then=then);
var id=(x)=>x;
var call=(x,y)=>x&&x.constructor === Function ? x(y) : y(x);

export var left=(x)=>{
  var then = resolved(x&&x.then
    ?(_,reject)=>right(x.then(reject,reject))
    :(_,reject)=>right(reject?call(reject,x):then))
  ;
  return then;
}
export var bimap = (y) => resolved((x)=>right(x.then?x.then(id,y):x(id,y)));
export var alt   = (y) => resolved((x)=>right(x.then?x.then(id,()=>y):x(id,()=>right(y))));
var either = Object.setPrototypeOf(bimap, {
  left,
  right,
  alt,
});
export default either;
