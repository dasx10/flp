var prototype = String.prototype.toLowerCase;
var toLowerCase = value => value
  ? prototype.call(value)
  : "";

export default toLowerCase;
