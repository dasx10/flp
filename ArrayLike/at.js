import paramInt       from "../.validator/paramInt.js";

var at = paramInt((index) => index < 0
  ? (arrayLikeike) => {
    var key = arrayLikeike.length + index;
    return key >= 0 ? arrayLikeike[key] : void 0;
  }
  : (arrayLike) => index < arrayLike.length ? arrayLike[index] : void 0
);

export default at;
export var then = (resolve)=> resolve(at);
