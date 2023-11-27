export default (call) => (value) => {
  var key;
  for (key in value) if (call(key = value[key])) return key;
}
