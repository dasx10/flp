import clump from "../../../p/Number/clump/index.js";
import lt from "../../../p/Number/lt/index.js";

export default ((min) => ((max) => ((lt(max, min))
  ? ((value) => clump(value, max, min))
  : ((value) => clump(value, min, max))
)));
