import config from "../config.js";

export default (test, onError) => (call) => (value) => {
  if (config.strict && !test(value)) throw new TypeError(onError(value));
  return call(value);
};
