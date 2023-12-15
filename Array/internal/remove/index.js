import inc    from "../../../Number/inc/index.js";
import lt     from "../../../Number/internal/lt/index.js";
import length from "../../length/index.js";
import limit  from "../limit/index.js";

export default (values, index) => lt(index, length(values))
  ? limit(values, index).concat(values.slice(inc(index)))
  : values
;
