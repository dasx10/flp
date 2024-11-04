import right from "../Monad/right.js";
var isString = (value) => typeof value === "string";
export default isString;
export var then = right(isString);
isString.toAsync = then;
