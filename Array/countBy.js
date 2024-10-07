import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";
import create            from "../Record/create.js";

var countBy = paramSyncFunction((call) => paramArrayLike((array) => {
  var object = create(null), length = array.length, index = 0, key;
  while (index < length) object[key = call(array[index++])] = (object[key] || 0) + 1;
  return object;
}));

export default countBy;
export var then = (resolve) => resolve(countBy);
