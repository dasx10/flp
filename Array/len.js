import abs from "../Math/abs.js";
import paramArray from "../.validator/paramArray.js";

var len = paramArray((values)=>"length" in Object(values) ? abs(values.length) : 0);

export default len;
export var then = (resolve) => resolve(len);
