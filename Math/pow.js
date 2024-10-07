import zero from "./zero.js";
var pow=(y)=>y===0?zero:(x)=>x**y;
export default pow;
export var then=(resolve)=>resolve(pow);
