import paramArray from "../.validator/paramArray.js";
var neEmpty = paramArray((array) => array.length >= 1);
export default neEmpty;
