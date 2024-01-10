import neTypeObject from "../../../Logic/ne/type/object/index.js";

var eq = (value, next) => {
  if (next == value) return true;
  if (neTypeObject(value) || neTypeObject(next)) return false;
  var values = new Set();
  var key;
  for (key in value) {
    if (eq(next[key], value[key])) {
      values.add(key);
      continue;
    }
    return false;
  }

  for (key in next) {
    if (values.has(key)) continue;
    return false;
  }

  return true;
};

export default eq;
