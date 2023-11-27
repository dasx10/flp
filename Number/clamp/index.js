import clump from "../internal/clump/index.js";
import lt from "../internal/lt/index.js";
export default (min) => (max) => lt(max, min)
  ? value => clump(value, max, min)
  : value => clump(value, min, max)
;
