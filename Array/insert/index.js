import _lt      from "../../Number/internal/lt/index.js";
import _limit   from "../internal/limit/index.js";
import notEmpty from "../notEmpty/index.js";
import length   from "../length/index.js";
import toArray  from "../toArray/index.js";

var insert = index => value => notEmpty(value)
  ? (values => notEmpty(values)
    ? _lt(index, length(values))
      ? _limit(values, index).concat(value, values.slice(index, length(values)))
      : values.concat(value)
    : value)
  : toArray
;

export default insert;
