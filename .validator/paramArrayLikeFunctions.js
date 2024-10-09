import config from "../config.js";

var strict = (call, values) => {
  if (values && values === Object(values) && "length" in values) {
    var length = values.length;
    if (length >= 0) {
      while (length--) if (typeof values[length] !== "function") throw new TypeError(String(values[length]) + " is not a function");
    }
    else throw new TypeError("Array-like object expected");
    return call(values);
  }
  throw new TypeError("Array-like object expected");
}

export default (call) => (values) => config.strict
  ? strict(call, values)
  : call(values)
;
