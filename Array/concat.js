import Array from "./Array.js";
import isArray from "./isArray.js";

import paramArrayLike from "../.validator/paramArrayLike.js";

var concat = paramArrayLike((y)=>{
  var yLength = y.length;
  return yLength > 0 ? paramArrayLike((x) => {
    var xLength = x.length;
    if (xLength > 0) {
      var create = Array(yLength + xLength);
      var index = xLength;
      while (index--) create[index] = x[index];
      index = yLength;
      while (index--) create[xLength + index] = y[index];
      return create;
    }
    if (isArray(y)) return y;
    var create = Array(yLength);
    var index = yLength;
    while (index--) create[index] = y[index];
    return create;
  }) : paramArrayLike((x) => {
    if (isArray(x)) return x;
    var index = x.length;
    var create = Array(index);
    while (index--) create[index] = x[index];
    return create;
  });
});

export default concat;
export var then = (resolve) => resolve(concat);
