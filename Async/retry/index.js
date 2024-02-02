import curry from "../../Function/curry/3";
var exec = (call, value, length) => Promise.resolve(call(value)).catch((error) => length ? exec(call, value, length - 1) : Promise.reject(error)));
export default curry(exec);
