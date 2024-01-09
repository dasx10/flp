export default (value, test) => {
  for (var key in test) {
    if (test[key](value[key], key, value)) continue;
    return false;
  }
  return true;
}
