import memoizeWeak from "../memoizeWeak/index.js";
export default (call) => memoizeWeak((value) => memoizeWeak(call(value)));
