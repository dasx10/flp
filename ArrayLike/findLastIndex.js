import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike from "../.validator/paramArrayLike.js";

var findLastIndex = paramSyncFunction((test) => paramArrayLike((array) => {
  var length = array.length;
  while (length--) if (test(array[length])) return length;
  return -1;
}));

export default findLastIndex;
export var then = (resolve) => resolve(findLastIndex);
