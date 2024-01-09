import eq from "../eq/index.js";
export default (value, test) => {
  for (var key in test) {
    if (eq(test[key], value[key])) continue;
    return false;
  }
  return true;
}
