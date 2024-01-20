import partialLimit from "../partialLimit/index.js";
export default (call, ...values) => partialLimit(call, call.length, ...values);
