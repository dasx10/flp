export default (value, test) => {
  var key;
  for (key in test) if (test[key](value[key], key, value)) return false;
  return true;
}
