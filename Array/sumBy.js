import paramArray from "../.validator/paramArray.js";
import paramMathFunction from "../.validator/paramMathFunction.js";

var sumBy = paramMathFunction((call) => paramArray((values) => {
  var index = 0, length = values.length, value = 0;
  while (index < length) value += call(values[index++]);
  return value;
}));

export default sumBy;
export var then = (resolve) => resolve(sumBy);
