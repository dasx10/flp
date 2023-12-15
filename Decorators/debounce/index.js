export default (freeze) => (call) => {
  var is;
  var resolve;
  return (value) => resolve
    ? (resolve = call(value))
    : (
       (clearTimeout(is)),
       (is = setTimeout((value) => resolve = call(value), freeze, value)),
       (resolve)
    );
};
