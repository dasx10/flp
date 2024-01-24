export default (value, test) => {
  var key;
  for (key in test) {
    if (test[key](value[key], key, value)) continue;
    return false;
  }
  return true;
}
