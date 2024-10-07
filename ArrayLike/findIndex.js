import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var findIndex = paramSyncFunction((call) => paramArrayLike((arrayLike) => {
  var length = arrayLike.length;
  if (length > 0) {
    var index = 0;
    while (index < length) if (call(arrayLike[index++])) return index - 1;
  }
  return -1;
}));

export default findIndex;
export var then = (resolve) => resolve(findIndex);
