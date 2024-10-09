import config from "../config.js";

var cache = new WeakMap();
var predicat = (call) => config.strict
  ? cache.get(call) || cache.set(call, ((value) => {
    var boolean = call(value);
    if (typeof boolean !== "boolean") throw new TypeError("return value must be a boolean");
    return boolean;
  })).get(call)
  : call;

export default predicat;
