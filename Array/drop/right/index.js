import identity from "../../../Logic/identity";
import _dropRight from "../../internal/drop/right";

var dropRight = index => ltZero(index)
  ? identity
  : values => _dropRight(values, ~index)
;

export default dropRight;
