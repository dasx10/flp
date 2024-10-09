import paramMathFunction from "../.validator/paramMathFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var findLastIndexMax = paramMathFunction((toFloat) => paramArrayLike((array) => {
  var length = array.length;
  if (length > 1) {
    var value = toFloat(array[0]), next = toFloat(array[1]), max = value > next ? 0 : (value = next, 1), index = 2;
    while (length--) (
      (next = toFloat(array[index])),
      (next > value && (max = index, value = next))
    );
    return max;
  }
  return length - 1;
}));

export default findLastIndexMax;
export var then=(resolve)=>resolve(findLastIndexMax);
