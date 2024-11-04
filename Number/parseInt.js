import Function from "../Function/Function.js";
import Number   from "./Number.js";

var _parseInt = (parseInt && Object(parseInt).constructor === Function && parseInt.length === 2)
  ? parseInt
  : (Number.parseInt && Object(Number.parseInt).constructor === Function && Number.parseInt.length === 2)
    ? Number.parseInt
    : (import("./.parseInt.js").then((value) => (_parseInt = value)), Number)
;

export default _parseInt;
