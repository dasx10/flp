import _is from "../../../Number/internal/is/index.js";
var _dimension = (values, next) => _is(values.length, next.length) ? values : next;
export default _dimension;

