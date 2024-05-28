import right from "./right.js";
var then = (then) => (then.then=then);
export default (call) => then((resolve) => right(call())(resolve));
