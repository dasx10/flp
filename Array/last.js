import paramArray from "../.validator/paramArray.js";

var last = paramArray((values) => {
  var length = values.length;
  return length >= 1 ? values[length - 1] : void 0;
});

export default last;
export var then = (resolve) => resolve(last);
