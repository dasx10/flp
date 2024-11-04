import paramArrayNumbers from "../.validator/paramArrayNumbers.js";

var sum = paramArrayNumbers((values) => {
  var index = 0,
      length = values.length,
      value = 0
  ;

  while (index < length) value += (values[index++]);
  return value;
});

export default sum;
export var then = (resolve) => resolve(sum);
