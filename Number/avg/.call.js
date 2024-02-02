import half from "../half/index.js";
import add from "../add/.call.js";
export default ((value, next) => (half(add(value, next))));
