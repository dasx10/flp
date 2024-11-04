import Array from "./Array.js";

var isArray= (Array.isArray && Array.isArray.constructor === Function)
  ? (Array.isArray)
  : ((value)=>(value instanceof Array))
;

export default isArray;
export var then=(resolve)=>resolve(isArray);
