import always from "../Logic/always.js";
import freeze from "../Record/freeze.js";
var empty = always(freeze([]));
export default empty;
export var then = (resolve) => resolve(empty);
