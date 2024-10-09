import Array from "../Array/Array.js";
import paramArrayLikeFunctions from "../.validator/paramArrayLikeFunctions.js";

var bank = paramArrayLikeFunctions((functions) => (value) => {
  var length = functions.length,
      values = Array(length),
      index  = 0
  ;
  while (index < length) values[index] = functions[index++](value);
  return values;
});

export default bank;
