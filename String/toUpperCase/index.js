var prototype = String.prototype.toUpperCase;
var toUpperCase = value => value ? prototype.call(value) : "";
export default toUpperCase;
