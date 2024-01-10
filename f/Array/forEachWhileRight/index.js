import exec from "../internal/forEachWhileExec/index.js";
export default (test) => (call) => ((call = exec(test, call)), ((values) => (values.findLastIndex(call), values)));
