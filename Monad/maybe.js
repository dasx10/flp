var n=(_,e)=>e?maybe(e()):nothing;
export var nothing = Object.setPrototypeOf(n, {
  then                : n,
  valueOf             : ()=>(void 0),
  toString            : ()=>'',
  [Symbol.toPrimitive]: (x)=>x==='number'?NaN:"",
  toJSON              : ()=>(null),
});
var w=new WeakSet(),add=(x)=>(w.add(x.then=x),x),is=(x)=>x&&x===Object(x)&&w.has(x);
var maybe=((x)=>x==null?nothing:is(x)?x:
add((y,e)=>y==null?nothing:(maybe(x.then?x.then((x)=>x==null?nothing:y(x),e):y(x)))));
export default maybe;
