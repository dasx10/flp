import isNil from "../is/nil/index.js";
var def = is => value => isNil(value) ? is : value;
export default def;
