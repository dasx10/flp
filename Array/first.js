import paramArray from "../.validator/paramArray";
var first=paramArray((array)=>array.length?array[0]:(void 0));
export default first;
export var then=(resolve)=>resolve(first);
