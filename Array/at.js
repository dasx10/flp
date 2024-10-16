import paramArrayAllowArrayLike from "../.validator/paramArrayAllowArrayLike.js";
import paramInt                 from "../.validator/paramInt.js";

var at = paramInt((index) => index < 0
  ? paramArrayAllowArrayLike((array) => {
    var key = array.length + index;
    return key >= 0 ? array[key] : void 0;
  })
  : paramArrayAllowArrayLike((array) => index < array.length ? array[index] : void 0)
);

export default at;
export var then = (resolve)=> resolve(at);
