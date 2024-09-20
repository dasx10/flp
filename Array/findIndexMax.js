import indexMax from"./indexMax.js";
var findIndexMax=(call)=>(values)=>indexMax(values.map(call));
export default findIndexMax;
export var then=(resolve)=>resolve(findIndexMax);
