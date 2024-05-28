var _nothing = (_, reject) => reject ? maybe(reject()) : nothing;

export var nothing = Object.setPrototypeOf(_nothing, {
  then                : _nothing,
  valueOf             : () => (void 0),
  toString            : () => '',
  [Symbol.toPrimitive]: (hint) => hint === 'number' ? NaN : "",
});

var memo=(y)=>{
  var has=new WeakMap();
  return(x)=>(x&&x===Object(x))&&(has.get(x)||(has.set(x,y(x)).get(y)))||y(x);
};

var maybes = new WeakSet();
var resolved=(then)=>(maybes.add(then.then=then), then);
var isMaybe = (value) => value && value === Object(value) && maybes.has(value);

var maybe=memo((x)=>x==null?nothing
  :isMaybe(x)?x:resolved((resolve, reject)=>resolve==null
    ?nothing
    :(maybe(x.then
      ?x.then((value)=>value==null?nothing:resolve(value),reject)
      :resolve(x)
    ))
  ));

export default maybe;
