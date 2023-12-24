export default (every) => (call) => (values) => {
  var is = null;
  return (every((value, index, values) => (is = call(value, index, values)))(values), is);
};
