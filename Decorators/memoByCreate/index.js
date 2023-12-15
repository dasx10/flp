export default (constructor) => (test) => (call) => {
  var values = new constructor();
  return (value) => {
    var key, is;
    return values.has(key = test(value))
      ? values.get(key)
      : (values.set(key, is = call(value)), is);
  }
};
