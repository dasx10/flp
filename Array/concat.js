import Array from "./Array.js";

import id from "../Logic/id.js";
import paramArray from "../.validator/paramArray.js";
import right from "../Monad/right.js";

var concat = paramArray((y)=>{
  var yLength = y.length;
  return paramArray(yLength > 0
    ? (x) => {
      var xLength = x.length;
      if (xLength > 0) {
        var create = Array(yLength + xLength);
        var index = xLength;
        while (index--) create[index] = x[index];
        index = yLength;
        while (index--) create[xLength + index] = y[index];
        return create;
      }
      return y;
    } : id)
});

export default concat;
export var then = right(concat);
concat.toAsync = then;
