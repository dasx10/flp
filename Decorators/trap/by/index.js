export default (test) => (call) => {
  var is, values = new Map();
  return (value) => {
    var key;
    return (values.get(key = test(value)))
        || (values.set(key, is = call(value).finally(() => values.delete(key))), is);
};
