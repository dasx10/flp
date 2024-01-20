import partial from "../../../p/Function/partial/index.js";

var binary = (call) => call.length === 1
  ? (value, ...next) => call(value)(...next)
  : call
;

export default partial((values, value, call) => values.reduce(binary(call), value));
