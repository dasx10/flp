import paramArray    from "../.validator/paramArray.js";
import paramFunction from "../.validator/paramFunction.js";

var traverse = paramFunction((call) => paramArray((array) => {
  var length = array.length;
  if (length > 0) {
    var value = array[0];
    var index = 1;
    while (index < length) value = call(value)(array[index++]);
    return value;
  }
  throw new TypeError("Cannot traverse an empty array");
}));

export default traverse;
export var then = (resolve) => resolve(traverse);
