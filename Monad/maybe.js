var n=(_,e)=>e?maybe(e()):nothing;
export var nothing = Object.setPrototypeOf(n, {
  then                : n,
  valueOf             : ()=>(void 0),
  toString            : ()=>'',
  [Symbol.toPrimitive]: (x)=>x==='number'?NaN:"",
});
var memo=(y)=>{var o=new WeakMap();return(x)=>(x&&x===Object(x))&&(o.get(x)||(o.set(x,y(x)).get(y)))||y(x);};
var o=new WeakSet(),create=(x)=>(o.add(x.then=x),x),is=(x)=>x&&x===Object(x)&&o.has(x);
var maybe=memo((x)=>x==null?nothing:is(x)?x:
create((resolve, reject)=>resolve==null
  ?nothing
  :(maybe(x.then
    ?x.then((value)=>value==null?nothing:resolve(value),reject)
    :resolve(x)
  ))
));
export default maybe;
