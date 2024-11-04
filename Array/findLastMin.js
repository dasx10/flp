import paramMathFunction from "../.validator/paramMathFunction.js";
import paramArray        from "../.validator/paramArray.js";

var findLastMin = paramMathFunction((toFloat) => paramArray((array) => {
  var length=array.length;
  if (length > 1) {
    var value = toFloat(array[--length]),
        next  = toFloat(array[--length]),
        min   = next < value ? (value = next, length) : length + 1;
    ;

    while (length--) (
      (next = toFloat(array[length])),
      (next < value && (min = length, value = next))
    );

    return array[min];
  }
  return length > 0 ? array[0] : void 0;
}));

export default findLastMin;
export var then=(resolve)=>resolve(findLastMin);
