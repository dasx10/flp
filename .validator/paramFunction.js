import String from "../String/String.js";
export default (exec) => (call) => {
  if (typeof call !== "function") throw new TypeError(String(call) + " is not a function");
  return exec(call);
}
