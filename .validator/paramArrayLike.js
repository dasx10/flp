import isArrayLike from "../ArrayLike/isArrayLike.js";
import paramMustBe from "./paramMustBe.js";
var paramArrayLike = paramMustBe(isArrayLike, (values) => String(values) + " is not an array like");
export default paramArrayLike;
