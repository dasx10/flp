import paramArray    from "../.validator/paramArrayAllowArrayLike.js";
import paramPredicat from "../.validator/paramPredicat.js";

var count = paramPredicat((test) => paramArray((array) => {
  var length = array.length;
  if (length > 0) {
    var index = 0,
        value = 0
    ;
    while (index < length) test(array[index++]) && value++;
    return value;
  }
  return 0;
}));

export default count;
export var then=(resolve)=>resolve(count);
