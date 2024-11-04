import paramMustBe from "./paramMustBe.js";
import isInt from "../Number/isInt.js";

export default paramMustBe(isInt, (value) => String(value) + " is not an integer");
