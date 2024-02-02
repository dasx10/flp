import eq from "../../../Object/internal/eq/index.js";
import is from "../is/index.js";
import _is from "../../../Number/internal/is/index.js";
import length from "../../length/index.js";
export default (values, next) => is(values, next) || (_is(length(values), length(next)) && values.every((value, index) => eq(next[index], value)));
