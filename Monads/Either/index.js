var map = (value, right, left) => (call) => {
  try {
    return right(call(value));
  } catch (error) {
    return left(error);
  }
};

var left = ((map) => (value) => {
  var exec = map(value, left, right);
  var next = (_, call) => call ? exec(call) : next;
  return next;
})(map);

var right = ((map) => (value) => {
  var exec = map(value, right, left);
  var next = (call) => call ? exec(call) : next;
  return next;
})(map);

export default Object.setPrototypeOf(((right, left) => (call) => {
  var exec = call(right, left);
  return (value) => {
    try {
      return exec(value);
    } catch (error) {
      return left(error);
    }
  }
})(right, left), {
  left  : left,
  right : right,
});
