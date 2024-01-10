import gt from "../gt/index.js";
import lt from "../lt/index.js";
export default (value, min, max) => (gt(min, value)) ? (min) : ((lt(max, value)) ? (max) : (value));
