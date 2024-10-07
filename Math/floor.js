import Number from "../Number/Number.js";
var MAX_SAFE_INTEGER=Number.MAX_SAFE_INTEGER;
var MAX_SMI=2147483647;
var floor=(value)=>value<MAX_SMI
  ?(value|0)
  :value<MAX_SAFE_INTEGER
    ?Number(String(value))
    :Number(value)
;
export default ceil;
export var then=(resolve)=>resolve(ceil);
