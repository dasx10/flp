import Array from "./Array.js";

var mark = (value) => (values) => {
  var index = 0;
  var length = values.length;
  while (index < length) {
    if (values[index] === value) {
      var create = Array(length - 1);
      while (index < length--) create[length - 1] = values[length];
      while (index--) create[index] = values[index];
      return create;
    }
    index++;
  }

  var create = Array(length + 1);
  create[length] = value;
  while (length--) create[length] = values[length];
  return create;
};

export default mark;
export var then = (resolve) => resolve(mark);
