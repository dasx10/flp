import maybe from "../../Monad/maybe.js";

var findIterable=(values,call)=>{
  var resolve;
  for(const value of values){
    const is=("then" in Object(value))?value.then(call):call(value);
    if(is){
      if("then" in Object(is))(resolve=(resolve?resolve.then((next)=>next||is.then((next)=>next&&({value}))):resolve=is.then((next)=>next&&({value}))));
      else return resolve?resolve.then((next)=>next?next.done:value):value;
    }
  }
  return resolve?resolve.then((next)=>next?next.value:void 0):void 0;
}

var findAsyncIterable=async(values,call)=>{
  var resolve;
  for await(const value of values){
    const is=call(value);
    if(is){
      if("then" in Object(is))(resolve=(resolve?resolve.then((n)=>n||is.then((r)=>r&&({is:value}))):resolve=is.then((r)=>r&&({is:value}))));
      else return resolve?resolve.then((value)=>value?value.is:value):value;
    }
  }
  return resolve?resolve.then((value)=>value&&value.is):void 0;
};

var find=(call)=>("then" in call)
  ?(values)=>maybe(call.then((exec)=>(values[Symbol.iterator]
    ?findIterable(values,exec):values[Symbol.asyncIterator]?findAsyncIterable(values,exec)
    :(values).then((values)=>values[Symbol.iterator]?findIterable(values,exec):findAsyncIterable(values,exec))
  )))
  :(values)=>maybe((values[Symbol.iterator]
    ?findIterable(values,call):values[Symbol.asyncIterator]?findAsyncIterable(values,call)
    :(values).then((iterable)=>iterable[Symbol.iterator]?findIterable(iterable,call):findAsyncIterable(iterable,call))
  ));

export default find;
export var then=(resolve)=>resolve(find);
