import RegExp from "./RegExp.js"
var prototype = (RegExp.prototype.exec)
var exec = (string) => (regExp) => prototype.call(regExp, string);
export default exec;
export var then = (resolve) => resolve(exec);
