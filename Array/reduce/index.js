import union2 from "../../Function/union/2/index.js";
export default ((reduce) => (call) => (value) => (values) => reduce.call(values, union2(call), value))(Array.prototype.reduce);
