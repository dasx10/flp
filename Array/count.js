import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var count = paramSyncFunction((call) => paramArrayLike((values) => {
  var length = values.length;
  if (length > 0) {
    var index = 0, value = 0;
    while (index < length) call(values[index++]) && value++;
    return value;
  }
  return 0;
}));

export default count;
export var then=(resolve)=>resolve(count);
