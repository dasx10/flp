export default (value, test) => {
  for (var key in test) if (test[key] !== value[key]) return false;
  return true;
}
