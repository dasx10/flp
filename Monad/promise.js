import { left, right } from "./either.js";
var then=(then)=>(then.then=then);
var id=(x)=>x;

var promise = (call) => {
  var values=Array();
  var value =then((right=id,left=id)=>values?promise((resolve=id,reject=id)=>values.push((value) => value((value) => resolve(right(value)), (error) => reject(left(error))))) : value(right, left));
  call(
    (then) => ((value = right(then)), values.forEach((call) => call(value)), values = null),
    (then) => ((value = left(then)),  values.forEach((call) => call(value)), values = null)
  );
  call = null;
  return value;
};

export default promise;
