import paramArrayLikeFunctions from "../.validator/paramArrayLikeFunctions.js";

var compose = paramArrayLikeFunctions((functions) => (value) => {
  var length = functions.length;
  while (length--) value = functions[length](value);
  return value;
});

export default compose;
export var then = (resolve) => resolve(compose);
