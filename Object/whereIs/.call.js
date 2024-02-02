export default (value, test) => {
  var key;
  for (key in test) if (test[key] !== value[key]) return false;
  return true;
}
