import paramNumber from "../.validator/paramNumber.js";
import right       from "../Monad/right.js";

var add = paramNumber((y) => paramNumber((x) => (x + y)));
export default add;
export var then = right(add);
add.toAsync = then;
