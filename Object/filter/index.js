export default (call) => (value) => {
  var create = new Map();
  for (var key in value) (call(value[key], key, value)) && (create.set(key, value[key]));
  return Object.fromEntries(create);
}
