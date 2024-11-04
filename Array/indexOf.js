import paramArray from "../.validator/paramArray";

var indexOf = (value) => paramArray((array) => {
  var length = array.length;
  if (length >= 1) {
    var index = 0;
    while (index < length) if (array[index] === value) return index;
  }
  return -1;
});

export default indexOf;
export var then = (resolve) => resolve(indexOf);
