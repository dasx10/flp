import config      from "../config.js"
import isArray     from "../Array/isArray.js";
import isArrayLike from "../ArrayLike/isArrayLike.js";

export default (call) => (values) => {
  if (config.strict) {
    if (isArray(values)) return call(values);
    throw new TypeError(String(values) + " is not an array");
  }

  if (config.save) {
    if (isArrayLike(values)) return call(values);
    return call(Array.from(values));
  }

  return call(values);
};
