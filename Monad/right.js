var resolved = (then) => (then.then = then);
var right = (value) => (value && value.then && value.then === value)
  ? value
  : resolved((resolve, reject) => right(value.then ? value.then(resolve, reject) : resolve(value)))
;
export default right;
