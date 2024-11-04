import redux from "./.redux.js";
var asyncRight = (promiseLike) => redux((resolve, reject) => asyncRight(promiseLike.then(resolve, reject)))
var right = (value) => ("then" in Object(value))
  ? value.then === value
    ? value
    : asyncRight(value)
  : redux((resolve) => right(resolve(value)))
;

export default right;
export var then = (resolve) => resolve(right);
