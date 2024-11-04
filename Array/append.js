import paramArray from "../.validator/paramArray.js";
import Array from "./Array.js";

var append = (value) => paramArray((array) => {
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
