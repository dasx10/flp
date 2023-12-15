export default (call) => (values) => {
  var is;
  return (values.every((value, index, values) => (is = call(value, index, values))), (is));
};
