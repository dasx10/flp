import paramArray    from "../.validator/paramArray.js";
import paramFunction from "../.validator/paramFunction.js";

var forEachRight = paramFunction((call) => paramArray((array) => {
  var length = array.length;
  while (length--) call(array[length]);
  return array;
}));

export default forEachRight;
export var then = (resolve) => resolve(forEachRight);
