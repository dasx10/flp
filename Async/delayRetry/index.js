import exec from "../internal/delayRetry/index.js";
export default (freeze) => (length) => (call) => (value) => exec(call, value, length, freeze);
