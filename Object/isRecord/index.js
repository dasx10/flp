import neNull from "../../Logic/ne/null/index.js";
import isObject from "../isObject/index.js";
export default (value) => (neNull(value) && isObject(value));
