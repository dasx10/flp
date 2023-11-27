import between from "../internal/between/index.js";
import lt      from "../internal/lt/index.js";

export default (min) => (max) => lt(min, max)
  ? (value) => between(value, min, max)
  : (value) => between(value, max, min)
;
