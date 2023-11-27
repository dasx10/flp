import ltZero     from "../../../Number/lt/zero";
import _drop      from "../../internal/drop";
import _dropRight from "../../internal/drop/right";

var dropAt = index => ltZero(index)
  ? values => _dropRight(values, ~index)
  : values => _drop(values, index)
;

export default dropAt;
