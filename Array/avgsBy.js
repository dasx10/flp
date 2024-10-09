import paramArrayLike    from "../.validator/paramArrayLike.js";
import paramMathFunction from "../.validator/paramMathFunction.js";

var avgsBy = paramMathFunction((toFloat) => paramArrayLike((values)=> {
  var length = values.length;
  if (length > 1) {
    var value = toFloat(values[0]),
        index = 1;
    while (index < length) value += toFloat(values[index++]);
    return value / length;
  }
  return length > 0 ? toFloat(values[0]) : NaN;
}));

export default avgsBy;
export var then=(resolve)=>resolve(avgsBy);
