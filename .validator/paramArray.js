import isArray from "../Array/isArray.js";

export default (call) => (values) => {
  if (isArray(values)) return call(values);
  throw new TypeError(String(values) + " is not an array");
};
