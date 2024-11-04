import paramPredicat from "../.validator/paramPredicat.js";
import paramArray    from "../.validator/paramArray.js";

var find = paramPredicat((test) => paramArray((array) => {
  var length = array.length;
  if (length > 0) {
    var index = 0;
    while (index < length) if (test(array[index])) return array[index]; else index++;
  }
}));

export default find;
export var then = (resolve) => resolve(find);
