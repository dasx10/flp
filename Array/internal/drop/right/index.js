import inc    from "../../../../Number/inc/index.js";
import length from "../../../length/index.js";
import _lt    from "../../../../Number/internal/lt/index.js";
import _limit from "../../limit/index.js";

var _dropRight = (values, index) => _lt(index, length(values))
  ? _limit(values, index).concat(values.slice(inc(index)))
  : values
;

export default _dropRight;
