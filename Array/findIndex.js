import paramPredicat from "../.validator/paramPredicat.js";
import paramArray    from "../.validator/paramArray.js";

var findIndex = paramPredicat((call) => paramArray((values) => {
  var length = values.length;
  if (length > 0) {
    var index = 0;
    while (index < length) if (call(values[index++])) return index - 1;
  }
  return -1;
}));

export default findIndex;
export var then = (resolve) => resolve(findIndex);
