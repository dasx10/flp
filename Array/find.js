import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike from "../.validator/paramArrayLike.js";

var find = paramSyncFunction((test) => paramArrayLike((array) => {
  var length = array.length;
  if (length > 0) {
    var index = 0;
    while (index < length) if (test(array[index])) return array[index]; else index++;
  }
}));

export default find;
export var then = (resolve) => resolve(find);
