import config from "../config.js";

var int = parseInt;

export default (call) => (value) => {
  if (config.strict && int(value) !== value) throw new TypeError(String(value) + " is not an integer");
  return call(config.save ? int(value) : value);
};
