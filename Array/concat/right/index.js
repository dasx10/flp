import identity from "../../Logic/identity/index.js";
import notEmpty from "../notEmpty/index.js";

var concatRight = next => notEmpty(next)
  ? values => notEmpty(values)
    ? next.concat(values)
    : next
  : identity;

export default concatRight;
