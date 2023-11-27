import dec from "../../../Number/dec/index.js";
var _loop = (call, value, length) => length ? _loop(call, call(value), dec(length)) : value;
export default _loop;
