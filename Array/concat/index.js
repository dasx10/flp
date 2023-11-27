import identity from "../../Logic/identity/index.js";
import notEmpty from "../notEmpty/index.js";

var concat = next => notEmpty(next)
  ? values => notEmpty(values)
    ? values.concat(next)
    : next
  : identity;

export default concat;
