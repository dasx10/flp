import paramArray    from "../.validator/paramArray.js";
import paramFunction from "../.validator/paramFunction.js";

var forEach = paramFunction((call) => paramArray((array) => {
  var length = array.length,
      index  = 0
  ;
  while (index < length) call(array[index++]);
  return array;
}));

export default forEach;
export var then = (resolve) => resolve(forEach);
