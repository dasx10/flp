export default values => value => {
  var is;
  return (values.some((call) => is = call(value)), is);;
}
