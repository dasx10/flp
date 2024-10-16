import paramMathFunction from "../.validator/paramMathFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var findLastIndexMax = paramMathFunction((toFloat) => paramArrayLike((array) => {
  var length = array.length;
  if (length > 1) {
    var value = toFloat(array[--length]),
        next  = toFloat(array[--length]),
        max   = next > value ? (value = next, length) : length + 1
    ;

    while (length--) (
      (next = toFloat(array[length])),
      (next > value && (max = length, value = next))
    );

    return max;
  }
  return length - 1;
}));

export default findLastIndexMax;
export var then=(resolve)=>resolve(findLastIndexMax);
