import paramNumber from "../.validator/paramNumber.js";
import right       from "../Monad/right.js";

var avg = paramNumber((y) => paramNumber((x) => (( x + y ) / 2) ));

export default avg;
export var then = right(avg);
abg.toAsync = then;
