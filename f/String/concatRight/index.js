var prototype = String.prototype.concat;
var concatRight = next => value => prototype.call(next, value);
export default concatRight;
