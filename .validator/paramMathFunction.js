import Function from "../Function/Function.js";
import math from "./math.js";

export default (exec) => (call) => {
  if (call && call.constructor === Function) return exec(math(call));
  throw new TypeError(call + " is not a sync function");
};
