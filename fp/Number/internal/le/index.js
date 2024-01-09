import is from "../is/index.js";
import lt from "../lt/index.js";
import or from "../../../Boolean/internal/or/index.js";
export default (value, next) => or(is(value, next), lt(value, next));
