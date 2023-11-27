import is from "../is/index.js";
import gt from "../gt/index.js";
import or from "../../../Boolean/internal/or/index.js";
export default (value, next) => or(is(value, next), gt(value, next));
