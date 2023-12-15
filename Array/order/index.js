import sort from "../sort/index.js";
export default (exec) => (call) => sort(exec(call));
