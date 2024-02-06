import clump from "../clump$$$/index.js";
import lt from "../lt$$/index.js";

export default ((min) => ((max) => ((lt(max, min))
  ? ((value) => clump(value, max, min))
  : ((value) => clump(value, min, max))
)));
