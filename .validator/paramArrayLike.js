import config from "../config.js";
import isArrayLike from "../ArrayLike/isArrayLike.js";

export default
  (call) => (values) => {
    if (config.strict && !isArrayLike(values)) throw new TypeError(String(values) + " is not an array like");
    return call(values);
  }
;
