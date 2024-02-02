import isFunction from "../../../f/Function/isFunction/index.js";
import where from "../where/index.js";
export default (value, test) => {
  var key;
  for (key in test) {
    if ((isFunction(test[key]) ? test[key](value[key]) : where(test[key], value[key]))) continue;
    return false;
  }
  return true;
}
