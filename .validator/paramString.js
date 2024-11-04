import String from "../String/String.js";
import isString from "../String/isString.js";
import paramMustBe from "./paramMustBe.js"
var paramString = paramMustBe(isString, (value) => String(value) + " is not a string");
export default paramString;
