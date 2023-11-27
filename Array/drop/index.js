import identity from "../../Logic/identity/index.js";
import _drop from "../internal/drop/index.js";

var drop = index => ltZero(index)
  ? identity
  : values => _drop(values, index)
;

export default drop;
