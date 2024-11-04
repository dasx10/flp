import paramArray from "../.validator/paramArray.js";
import paramInt   from "../.validator/paramInt.js";
import right      from "../Monad/right.js";

var at = paramInt((index) => (index < 0)
  ? paramArray((array) => {
    var key = array.length + index;
    return key >= 0 ? array[key] : void 0;
  })
  : paramArray((array) => (index < array.length) ? (array[index]) : void 0)
);

export default at;
export var then = right(at);
at.toAsync = then;
