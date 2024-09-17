var thenObject=(x)=>(x.constructor=maybe,x.then=x);
var is=0;
export var nothing = (resolve=void 0,reject=void 0) => is
  ?((is=0),(resolve&&reject&&resolve.constructor===Function&&reject.constructor===Function&&resolve.length===1&&reject.length===1)?maybe(resolve()):nothing)
  :nothing
;
Object.defineProperty(nothing,"then",{get(){return (is=1,nothing);}});

var toString=()=>"";
function maybe (x) {
  return ((x==null||x===nothing)?nothing:("then" in Object(x))?(x.constructor===maybe)?x:thenObject((y,e)=>(y==null||y===nothing)?nothing:maybe(
      y.constructor===Function?x.then(y):("then" in Object(y))?y.then((y)=>(y==null)
        ?nothing
        :x.then((x0)=>(x0==null)?nothing.then(y,e):y(x0)),
      e)
      :x.then((x0)=>(x0==null)?(nothing(y,e)):y(x),e))
    ):just(x)
  );
}

export var just=(x)=>thenObject((y,e=void 0)=>y==null?nothing:maybe(y.constructor===Function?y(x):("then" in Object(y))?y.then((y)=>y(x),e):x(y)));

var Void=()=>void 0;
nothing.toString=toString;
nothing.valueOf=Void;
nothing.toJSON=Void;
nothing[Symbol.toPrimitive]=Void;
nothing.constructor=maybe;

export default Object.assign(maybe, {
  just,
  nothing
});
