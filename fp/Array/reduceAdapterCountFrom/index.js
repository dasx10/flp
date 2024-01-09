import flip from "../../Function/flip/index.js";
export default (reduce) => flip((call) => reduce((length) => (value, index, values) => call(value, index, values) ? (length + 1) : (length)));
