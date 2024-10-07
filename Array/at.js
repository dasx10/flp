import paramArrayLike from "../.validator/paramArrayLike.js";
import paramInt       from "../.validator/paramInt.js";

var at = paramInt((index) => index < 0
  ? paramArrayLike((values) => {
    var key = values.length + index;
    return key >= 0 ? values[key] : void 0;
  })
  : paramArrayLike((values) => index < values.length ? values[index] : void 0)
);

export default at;
export var then = (resolve)=> resolve(at);
