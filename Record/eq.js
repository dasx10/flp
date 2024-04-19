import is from "../../Logic/eq/index.js";
var neObject = (value) => value !== Object(value);
export default function eq(next) {
  var test = is(next);
  return neObject(next)
    ? test
    : (value) => {
      if (test(value)) return true;
      if (neObject(value)) return false;
      var key;
      var values = Array();
      for (key in value) {
        if (eq(next[key])(value[key])) {
          values.push(key);
          continue;
        }
        return false;
      }

      for (key in next) {
        if (next[key] == null || values.includes(key)) continue;
        return false;
      }

      return true;
  }
};
