export default (call) => {
  var values = new Map();
  var is = null;
  return (value) => (
    (values.get(value)) ||
    (values.set(value, is = Promise.resolve(call(value)).finally(() => values.delete(value))), is)
  );
};
