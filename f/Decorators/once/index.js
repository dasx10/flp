import isUndefined from "../../Logic/is/undefined/index.js";
var once = (call, is) => value => isUndefined(is) ? (is = call(value)) : is;
export default once;
