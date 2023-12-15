export default (call) => (values) => {
  var is;
  return (values.some((value, index, values) => (is = call(value, index, values))), (is));
}
