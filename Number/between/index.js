import between from "../../../p/Number/between/index.js";
import lt from "../../../p/Number/lt/index.js";

export default ((min) => (max) => (lt(min, max)
  ? (value) => between(value, min, max)
  : (value) => between(value, max, min)
));
