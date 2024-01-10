import call from "../internal/clump/index.js";
import test from "../internal/lt/index.js";
export default (min) => (max) => (test(max, min) ? (value) => call(value, max, min) : (value) => call(value, min, max));
