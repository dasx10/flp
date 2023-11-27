import inc    from "../../../Number/inc";
import length from "../../length";
import _lt    from "../../../Number/internal/lt";
import _limit from "../limit/index.js";

var _drop = (values, index) => _lt(index, length(values))
  ? _limit(values, index).concat(values.slice(inc(index)))
  : values
;

export default _drop;
