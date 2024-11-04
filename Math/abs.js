import paramNumber from "../.validator/paramNumber.js";
import { right } from "../Monad/either.js";

var abs = paramNumber((value) => value < 0 ? (-value) : (value > 0 || value === 0) ? (value) : (NaN) );
export default abs;
export var then=right(abs);
abs.toAsync=then;
