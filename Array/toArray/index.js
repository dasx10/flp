var isArray = Array.isArray;
var toArray = value => isArray(value) ? value : [value];
export default toArray;
