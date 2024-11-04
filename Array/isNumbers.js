import every from "./every.js";
var isNumbers = every((value) => typeof value === "number");
export default isNumbers;
export var then = (resolve) => resolve(isNumbers);
