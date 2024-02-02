export default (test) => (call) => {
  var is;
  return (value) => test(is = call(value))(value) ? value : is;
}
