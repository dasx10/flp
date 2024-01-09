import empty from "../empty/index.js";
export default (call) => (values) => values.reduceRight((create, value, index, values) => (call(value, index, values) ? [value].concat(create) : create), empty());
