import exec from "../../half/index.js";
import call from "../add/index.js";
export default (value, next) => exec(call(value, next));
