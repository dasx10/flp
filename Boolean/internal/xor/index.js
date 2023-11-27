import isTrue from "../../is/true/index.js";
import _or    from "../or/index.js";
export default (value, next) => isTrue(_or(value, next));
