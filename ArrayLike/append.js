import paramArrayLike from "../.validator/paramArrayLike.js";
import Array from "../Array/Array.js";

var append = (value) => paramArrayLike((array) => {
  var length = array.length;
  if (length > 0) {
    var create = Array(length + 1);
    create[length] = value;
    while (length--) create[length] = array[length];
    return create;
  }
  return [value];
});

export default append;
export var then=(resolve)=>resolve(append);
