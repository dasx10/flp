export default (forEach) => (call) => (value) => (values) => {
  var is = value;
  forEach((value, key, values) => (is = call(is)(value, key, values)))(values);
  return is;
};
