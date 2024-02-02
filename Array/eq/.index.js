import eq from "../../Object/eq/.index.js";
export default (values, next) => values.length === next.length && values.every((value, index) => eq(value, next[index]));
