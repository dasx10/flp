import call from "../internal/between/index.js";
import test from "../internal/lt/index.js";
export default (min) => (max) => (test(min, max) ? (value) => call(value, min, max) : (value) => call(value, max, min));
