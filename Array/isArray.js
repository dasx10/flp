var isArray=Array.isArray||((value)=>(value instanceof Array));
export default isArray;
export var then=(resolve)=>resolve(isArray);
