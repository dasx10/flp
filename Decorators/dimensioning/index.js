import dimension from "../../Array/internal/dimension/index.js";
export default (call) => (values) => dimension(call(values), values);
