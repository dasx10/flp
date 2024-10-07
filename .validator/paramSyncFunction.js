import Function from "../Function/Function.js";
export default (exec) => (call) => {
  if (call && call.constructor === Function) return exec(call);
  throw new TypeError(call + " is not a sync function");
};
