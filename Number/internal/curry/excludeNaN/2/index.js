import identity from "../../../../../Logic/identity/index.js";
export default (call) => (next) => isNaN(next) ? identity : (value) => call(value, next);
