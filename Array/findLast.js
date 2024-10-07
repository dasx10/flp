import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var findLast = paramSyncFunction((test) => paramArrayLike((array) => {
  var length = array.length;
  while (length--) if (test(array[length])) return array[length];
}));

export default findLast;
export var then = (resolve) => resolve(findLast);
