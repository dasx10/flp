import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike from "../.validator/paramArrayLike.js";

var findIndexMin = paramSyncFunction((toFloat) => paramArrayLike((array) => {
  var length=array.length;
  if (length > 1) {
    var value = toFloat(array[0]), next = toFloat(array[1]), max = value < next ? 0 : (value = next, 1), index = 2;
    while (index < length) (
      (next = toFloat(array[index])),
      (next < value && (max = index, value = next)),
      (index++)
    );
    return max;
  }
  return length - 1;
}));

export default findIndexMin;
export var then=(resolve)=>resolve(findIndexMin);
