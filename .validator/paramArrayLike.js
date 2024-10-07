import isArrayLike from "../ArrayLike/isArrayLike.js";

export default (call) => (values) => {
  if (isArrayLike(values)) return call(values);
  throw new TypeError(String(values) + " is not an array like");
};
