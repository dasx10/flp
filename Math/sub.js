import id from "../Logic/id.js";
var sub=(y)=>y===0?id:(x)=>x-y;
export default sub;
export var then=(resolve)=>resolve(sub);
