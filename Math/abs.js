import Number from "../Number/Number.js";

var exec=(value)=>value < 0 ? -value : value >= 0 ? value : NaN ;
var abs=(value)=>exec(Number(value));

export default abs;
export var then=(resolve)=>resolve(abs);
