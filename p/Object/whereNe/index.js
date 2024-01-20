export default (value, test) => {
  var key;
  for (key in test) if (value[key] === test[key]) return false
  return true;
};
