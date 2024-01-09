import reduce from "../../../Array/reduce/index.js";
import pipe   from "../../../Composition/pipe/index.js";
export default (exec) => (call) => (value) => pipe([
  exec,
  reduce(call)(value)
]);
