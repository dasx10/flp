import paramArray        from "../.validator/paramArray.js";
import paramMathFunction from "../.validator/paramMathFunction.js";

var findIndexMax = paramMathFunction((toFloat) => paramArray((array) => {
  var length=array.length;
  if (length > 1) {
    var value = toFloat(array[0]), next = toFloat(array[1]), max = value > next ? 0 : (value = next, 1), index = 2;
    while (index < length) (
      (next = toFloat(array[index])),
      (next > value && (max = index, value = next)),
      (index++)
    );
    return max;
  }
  return length - 1;
}));

export default findIndexMax;
export var then = (resolve) => resolve(findIndexMax);
