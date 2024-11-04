import int from "../Math/int.js";
var isInt = (value) => (value === int(value));
export default isInt;
export var then = (resolve) => resolve(isInt);
