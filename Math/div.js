import zero from "./zero.js";
var div=(y)=>y===0?zero:(x)=>x/y;
export default div;
export var then=(x)=>x(div);
