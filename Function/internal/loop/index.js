import dec from "../../../Number/dec/index.js";
import isPos from "../../../Number/isPos/index.js";
export default (call, value, length) => isPos(length) ? _loop(call, call(value), dec(length)) : value;
