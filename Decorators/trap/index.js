export default (call) => {
  var values = new Map();
  var is = null;
  return (value) => (
    (values.get(value)) ||
    (values.set(value, is = (call(value)).finally(() => values.delete(value))), is)
  );
};
