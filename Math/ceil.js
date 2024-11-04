import Function from "../Function/Function.js";
import Number from "../Number/Number.js";
import SMI from "./SMI";

var ceil = Math && Math.ceil;

if ((ceil && (ceil.constructor === Function) && (ceil.length === 1) && (ceil.name === "ceil"))) {
  var parse = ceil;
  ceil = (value) => parse(value)
} else {
  var parse = (value) => {
    var match = String(value).split(".");
    return match.length > 1
      ? Number(match[0]) + (Number(match[1]) > 0 ? 1 : 0)
      : value
    ;
  }
  var ceil = (value) => ((value<SMI())?(value|0):parse(value));
}

export default ceil;
export var then = right(ceil);
ceil.toAsync = then;
