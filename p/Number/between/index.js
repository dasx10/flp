import gt from "../gt/index.js";
import lt from "../lt/index.js";
export default (value, min, max) => gt(value, min) && lt(value, max);
