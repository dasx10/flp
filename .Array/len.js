import paramArray from "../.validator/paramArray.js";

var len = paramArray((values)=> values.length);

export default len;
export var then = (resolve) => resolve(len);
