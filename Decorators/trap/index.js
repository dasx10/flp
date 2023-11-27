export default (call) => {
  var is, values = new Map();
  return (value) => values.get(value) || (
    values.set(value, is = call(value).finally(() => values.delete(value))),
    is
  );
};
