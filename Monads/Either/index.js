var left   = (value) => (call, next) => next ? right(next(value)) : left(value);
var right  = (value) => (call) => right(call(value));
var either = Object.setPrototypeOf((call) => call(right, left), {
  left  : left,
  right : right
});
export default either;
