import type from "../../Spec/type/index.js";
import is from "../../String/is/index.js";
export default (test, value) => is(type(value), test);
