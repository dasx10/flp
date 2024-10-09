import Array from "./Array.js";

var copy = (array) => {
  var length = array.length;
  var create = Array(length);
  while (length--) create[length] = array[length];
  return create;
}

export default copy;
