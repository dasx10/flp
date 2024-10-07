import id from "../Logic/id.js";
var add=(y)=>y===0?id:(x)=>x+y;
export default add;
export var then=(x)=>x(add);
