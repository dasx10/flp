import config from "../config.js";

var iterator = Symbol.iterator;

export default (call) => (values) => {
  if (config.strict && !(iterator in Object(values))) throw new TypeError(String(values) + " is not iterable");
  return call(values);
};
