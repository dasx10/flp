import append from "../Array/append.js";
import right from "../Monad/right.js";
var _append=right(append);
var allIterable=(x)=>{
  var value,resolved=right([]);
  for(value of x)resolved=_append(right(value))(resolved);
  return resolved;
}
var allAsyncIterable=Array.fromAsync||(async(x)=>{
  var value,values=[];
  for await(value of x)values.push(value);
  return values;
});
var all=right((x)=>(Symbol.iterator in x)
  ?allIterable(x)
  :right(allAsyncIterable(x))
);
export default all;
