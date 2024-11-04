import isArray from "../Array/isArray.js";
import paramMustBe from "./paramMustBe.js";
export default paramMustBe(isArray, (values) => String(values) + " is not an array");
