import between from "../between/main.js";
import lt from "../lt/main.js";

export default ((min) => (max) => (lt(min, max)
  ? (value) => between(value, min, max)
  : (value) => between(value, max, min)
));
