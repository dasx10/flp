import e from "../../Number/e/index.js";
import div from "../../Number/div$$/index.js";
import mul from "../../Number/mul$$/index.js";
export default ((round) => ((value, next) => (div(round(mul(value, e(next))), e(next)))));
