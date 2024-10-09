import config from "../config.js";

var strict = (call, values) => {
  if (values && values === Object(values) && "length" in values) {
    var length = values.length;
    if (length >= 0) {
      while (length--) if (typeof values[length] !== "number") throw new TypeError(String(values[length]) + " is not a number");
    }
    else throw new TypeError("Array-like object expected");
    return call(values);
  }
  throw new TypeError("Array-like object expected");
}

var save = (call, values) => {
  var length = values.length;

  if (length > 0) while (length--) if (typeof values[length] !== "number") {
    var create = Array(values.length);
    var index = 0;
    while (index < length) create[index] = +(values[index++]);
    length = values.length;
    while (index < length) create[index] = values[index++];
    return call(create);
  }

  if (length !== 0) {
    if (values[Symbol.iterator]) return call(Array.from(values));
    else return call([]);
  }

  return length === 0
    ? call(values)
    : values[Symbol.iterator]
      ? call(Array.from(values, Number))
      : call([])
  ;
}

export default (call) => (values) => (
    config.strict ? strict(call, values)
  : config.save   ? save(call, values)
  : call(values)
);
