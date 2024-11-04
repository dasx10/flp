import exec from "../RegExp/exec.js";
import right from "../Monad/right.js";
import SMI from "./SMI.js";

var parse = (value) => {
  var match = exec(String(value))(/\d+/);
  return Number(match && match[0]) || 0;
};

var int = (value) => value
  ? ((value.constructor === Number) && (value > 0) && (value < SMI()))
    ? (value | 0)
    : parse(value)
  : 0
;

export default int;
export var then = right(int);
int.toAsync=then;
