export default (forEach) => (values) => (call) => {
  var is;
  return (forEach((value, index, values) => (is = call(value, index, values)))(values), is);
};
