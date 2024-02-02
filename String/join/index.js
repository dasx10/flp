import exec from "../../../_/join/index.js";
import always from "../../Logic/always/index.js";

export default ((join) => ((next) => ((next)
  ? ((value) => value ? exec(value, next, join) : next)
  : (always(next))
)));
