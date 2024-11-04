import paramPredicat from "../.validator/paramPredicat.js";
import paramArray    from "../.validator/paramArray.js";

var findLast = paramPredicat((test) => paramArray((array) => {
  var length = array.length;
  while (length--) if (test(array[length])) return array[length];
}));

export default findLast;
export var then = (resolve) => resolve(findLast);
