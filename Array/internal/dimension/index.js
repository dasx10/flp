import is from "../../../Number/internal/is/index.js";
import length from "../../length/index.js";
export default (values, next) => is(length(values), length(next)) ? values : next;;
