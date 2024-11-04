import paramMathFunction from "../.validator/paramMathFunction.js";
import paramArrayLike    from "../.validator/paramArray.js";

var findLastMax = paramMathFunction((toFloat) => paramArrayLike((array) => {
  var length=array.length;
  if (length > 1) {
    var value = toFloat(array[--length]),
        next  = toFloat(array[--length]),
        max   = next > value ? (value = next, length) : length + 1
    ;

    while (length--) (
      (next = toFloat(array[length])),
      (next > value && (max = length, value = next))
    );

    return array[max];
  }
  return length > 0 ? array[0] : void 0;
}));

export default findLastMax;
export var then=(resolve)=>resolve(findLastMax);
