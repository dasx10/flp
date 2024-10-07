import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var findMax = paramSyncFunction((toFloat) => paramArrayLike((array) => {
  var length = array.length;
  if (length > 1) {
    var value = toFloat(array[0]),
        next  = toFloat(array[1]),
        max   = value > next ? 0 : (value = next, 1),
        index = 2
    ;

    while (index < length) (
      (next = toFloat(array[index])),
      (next > value && (max = index, value = next)),
      (index++)
    );

    return array[max];
  }
  return length ? array[0] : void 0;
}));

export default findMax;
export var then=(resolve)=>resolve(findMax);
