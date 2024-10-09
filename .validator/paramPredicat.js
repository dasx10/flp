import Function from "../Function/Function.js";
import predicat from "./predicat.js";

export default (exec) => (call) => {
  if (call && call.constructor === Function) return exec(predicat(call));
  throw new TypeError(call + " is not a sync function");
};
