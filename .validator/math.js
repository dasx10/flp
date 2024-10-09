import config from "../config.js";

var cache = new WeakMap();
var math = (call) => config.strict
  ? cache.get(call) || cache.set(call, ((value) => {
    var number = call(value);
    if (typeof number !== "number") throw new TypeError("return value must be a number");
    return number;
  })).get(call)
  : call;

export default math;
