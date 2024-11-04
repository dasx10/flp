import paramArray from "../.validator/paramArray";
var isEmpty = paramArray((array) => array.length === 0);
export default isEmpty;
export var then = (resolve) => resolve(isEmpty);
