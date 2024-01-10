import half from "../../../f/Number/half/index.js";
import add from "../add/index.js";
export default ((value, next) => (half(add(value, next))));
