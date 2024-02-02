export default (value, call, next) => Promise.all([value, call]).then(({ 0: value, 1: call }) => {
  var is = call(value);
  return is ? Promise.resolve(next(value)) : is;
});
