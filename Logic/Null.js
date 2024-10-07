import always from "./always.js";
var Null = always(null);
export default Null;
export var then = (resolve) => resolve(Null);
