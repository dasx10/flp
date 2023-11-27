import _eq from "../../Object/internal/eq/index.js";
var eq = next => values => next.length === values.length && values.every((value, index) => _eq(next[index], value))
export default eq;
