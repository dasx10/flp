import is from "../is/index.js";
import lt from "../lt/index.js";
export default (value, next) => (is(value, next) || lt(value, next));
