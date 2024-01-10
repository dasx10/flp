import is from "../is/index.js";
import gt from "../gt/index.js";
export default (value, next) => is(value, next) || gt(value, next);
