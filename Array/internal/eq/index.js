import eq from "../../../Object/internal/eq/index.js";
export default (values, next) => values.length === next.length && values.every((value, index) => eq(next[index], value))
