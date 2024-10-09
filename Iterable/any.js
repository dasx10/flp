import paramPredicat from "../.validator/paramPredicat.js";
import paramIterable from '../.validator/paramIterable.js';

var any = paramPredicat((test) => paramIterable((values)=>{
  var is, value;
  for (value of values) if (is = test(value)) return is;
  return is
}));

export default any;
export var then=(resolve)=>resolve(any);
