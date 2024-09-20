var thenObject=(x)=>(x.then=x);

var resolver=(resolve)=>resolve!=null
  ? resolve.then
    ? (value) => resolve.then((resolve) => resolve != null
      ?typeof resolve==="function"
        ? resolve(value)
        : value != null ? value(resolve) : value
      : value
    )
    :typeof resolve==="function"
      ? (value) => resolve(value)
      : (value) => value(resolve)
  : (value) => value
;

var rejecter=(reject) =>reject!=null
  ?typeof reject==="function"
    ?(error)=>reject(error)
    :"then" in reject
      ?(error)=>reject.then((reject)=>reject(error))
      :(error)=>error(reject)
  :(error)=>Promise.reject(error)
;

var asyncRight = (x) => thenObject((resolve, reject) => asyncRight(x.then(resolver(resolve), rejecter(reject))));

var right=(x)=>(("then" in Object(x))
  ?x.then===x?x
    :thenObject((y,e)=>right(typeof y==="function"?x.then(y,e):("then" in Object(y))?y.then((y)=>x.then(y),rejecter(e)):x.then((x)=>x(y),rejecter(e))))
  :thenObject((y,e)=>right(typeof y==="function"?y(x):("then" in Object(y))?y.then((y)=>typeof y==="function"?y(x):x(y),rejecter(e)):x(y)))
);

export default right;
