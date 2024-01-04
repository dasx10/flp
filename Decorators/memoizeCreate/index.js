export default (constructor) => (call) => {
  var values = new constructor();
  return ((value) => values.get(value) || (values.set(value, value = call(value)), value));
}
