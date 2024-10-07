import zero from "./zero.js";
var mul=(y)=>y===0?zero:(x)=>x*y;
export default mul;
export var then=(resolve)=>resolve(mul);
