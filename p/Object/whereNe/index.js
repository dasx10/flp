import eq from "../eq/index.js";
export default (value, test) => {
  var key;
  for (key in test) if (eq(value[key], test[key])) return false
  return true;
};
