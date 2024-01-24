import e from "../../f/Number/e/index.js";
import div from "../../p/Number/div/index.js";
import mul from "../../p/Number/mul/index.js";
export default ((round) => ((value, next) => (div(round(mul(value, e(next))), e(next)))));
