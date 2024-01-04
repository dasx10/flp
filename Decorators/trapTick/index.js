export default (call) => {
  var values = new Map();
  var is = null;
  return (value) => (values.has(value))
    ? (values.get(value))
    : (
        (is = call(value)),
        (values.set(value, is)),
        (Promise.resolve().finally(() => values.delete(value))),
        (is)
      );
};
