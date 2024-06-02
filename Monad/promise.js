import { left, right } from "./either.js";
var then=(then)=>(then.then=then);
var id=(x)=>x;

var promise = (x) => {
  var o=Array();
  var y=then((right,left)=>o?promise((resolve,reject)=>o.push(
    (value)=>value((value)=>(resolve||id)((right||id)(value)),
    (error)=>(reject||id)((left||id)(error))))
  ):y(right,left));
  x(
    (then)=>((y=right(then)), o.forEach((call)=>call(y)),o=null),
    (then)=>((y=left(then)),  o.forEach((call)=>call(y)),o=null)
  );
  x = null;
  return y;
};

export default promise;
