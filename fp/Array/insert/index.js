import toArray from "../../Adapter/toArray/index.js";
import lt      from "../../Number/internal/lt/index.js";
import after from "../internal/after/index.js";
import limit   from "../internal/limit/index.js";
import length   from "../length/index.js";
import neEmpty from "../neEmpty/index.js";

export default (index) => (value) => (neEmpty(value))
  ? ((values) => neEmpty(values)
    ? lt(index, length(values))
      ? limit(values, index).concat(value, after(index, values))
      : values.concat(value)
    : value)
  : toArray
;
