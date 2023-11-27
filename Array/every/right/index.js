import complement from "../../../Logic/complement/index.js";
export default (call) => (call = complement(call), (values) => values.findLastIndex(call) < 0);
