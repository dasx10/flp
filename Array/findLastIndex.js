import paramPredicat  from "../.validator/paramPredicat.js";
import paramArray     from "../.validator/paramArray.js";

var findLastIndex = paramPredicat((test) => paramArray((array) => {
  var length = array.length;
  while (length--) if (test(array[length])) return length;
  return -1;
}));

export default findLastIndex;
export var then = (resolve) => resolve(findLastIndex);
