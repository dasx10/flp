import Function from "../Function/Function.js";
import String   from "../String/String.js";
import replace from "./replace.js";

var prototype = (
  (
    (String && String.prototype) &&
    (String.prototype.trim && String.prototype.trim.constructor === Function && String.prototype.trim)
  ) ||
  (function () {
    return this
      ? replace(/^\s+|\s+$/g)("")(this)
      : ""
    ;
  })
);

var trim = (value) => prototype.call(value);
export default trim;
