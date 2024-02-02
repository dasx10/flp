export default (value, call, next) => Promise.all([value, call]).then(({ 0: value, 1: call }) => {
  var is = call(value);
  return is ? is : Promise.resolve(next).then((next) => next(value));
});
