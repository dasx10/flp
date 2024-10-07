import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var findLastIndexMin = paramSyncFunction((toFloat) => paramArrayLike((array) => {
  var length=array.length;
  if (length > 1) {
    var value = toFloat(array[0]), next = toFloat(array[1]), min = value < next ? 0 : (value = next, 1), index = 2;
    while (length--) (
      (next = toFloat(array[index])),
      (next < value && (min = index, value = next))
    );
    return min;
  }
  return length - 1;
}));

export default findLastIndexMin;
export var then = (resolve) => resolve(findLastIndexMin);
