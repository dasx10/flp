import maybe from "../Monad/maybe.js";

var findIterable=(x,y)=>{
  var r,o;
  for(const i of x){
    r=("then" in Object(i))?i.then(y):y(i);
    if(r){
      if("then" in Object(r))(o=(o?o.then((n)=>n||r.then((r)=>r&&({is:i}))):o=r.then((r)=>r&&({is:i}))));
      return o?o.then((o)=>o?o.is:i):i;
    }
  }
  return o?o.then((o)=>o&&o.is):void 0;
}

var findAsyncIterable=async(x,y)=>{
  var r,o;
  for await(const i of x){
    r=y(i);
    if(r){
      if("then" in Object(r))(o=(o?o.then((n)=>n||r.then((r)=>r&&({is:i}))):o=r.then((r)=>r&&({is:i}))));
      return o?o.then((o)=>o?o.is:i):i;
    }
  }
  return o?o.then((o)=>o&&o.is):void 0;
};

var find=(y)=>y.then
  ?(x)=>maybe(y.then((y)=>(x[Symbol.iterator]
    ?findIterable(x,y):x[Symbol.asyncIterator]?findAsyncIterable(x,y)
    :(x).then((x)=>x[Symbol.iterator]?findIterable(x,y):findAsyncIterable(x,y))
  )))
  :(x)=>maybe((x[Symbol.iterator]
    ?findIterable(x,y):x[Symbol.asyncIterator]?findAsyncIterable(x,y)
    :(x).then((x)=>x[Symbol.iterator]?findIterable(x,y):findAsyncIterable(x,y))
  ))
;

export default find;
export var then=(resolve)=>resolve(find);
