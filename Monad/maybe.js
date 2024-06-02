var n=(_,e)=>e?maybe(e()):nothing;
export var nothing = Object.setPrototypeOf(n, {
  then                : n,
  valueOf             : ()=>(void 0),
  toString            : ()=>'',
  [Symbol.toPrimitive]: (x)=>x==='number'?NaN:"",
});
var w=new WeakSet(),create=(x)=>(w.add(x.then=x),x),is=(x)=>x&&x===Object(x)&&w.has(x);
var maybe=((x)=>x==null?nothing:is(x)?x:
create((resolve, reject)=>resolve==null
  ?nothing
  :(maybe(x.then
    ?x.then((value)=>value==null?nothing:resolve(value),reject)
    :resolve(x)
  ))
));
export default maybe;
