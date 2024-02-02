export default (forEach) => (call) => (values) => {
  var is;
  return (forEach((value, index, values) => (is = call(value, index, values)))(values), is);
};
