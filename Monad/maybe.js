import right from "./right.js";

var n=(_,e)=>e?maybe(e()):nothing;
export var nothing = Object.setPrototypeOf(n, {
  then                : n,
  valueOf             : ()=>(void 0),
  toString            : ()=>'',
  [Symbol.toPrimitive]: (x)=>x==='number'?NaN:"",
  toJSON              : ()=>(null),
});
var o=(x)=>(x.then=x);
export var just=(x)=>((x=right(x)),o((y)=>maybe(right(y)(x))));
var w=new WeakSet(),add=(x)=>(w.add(x.then=x),x),is=(x)=>x&&x===Object(x)&&w.has(x);
var maybe=Object.setPrototypeOf((x)=>x==null?nothing:is(x)?x:
add((y,e)=>y==null?nothing:(maybe(x.then?x.then((x)=>x==null?nothing:y(x),e):y(x)))),{nothing,just});
export default maybe;
