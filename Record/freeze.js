import id from "../Logic/id.js";
var freeze = {}.constructor.freeze || id;
export default freeze;
export var then = (resolve) => resolve(freeze);
