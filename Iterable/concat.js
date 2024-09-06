var concat=(y)=>(x)=>({[Symbol.iterator]:function*(){yield*x;yield*y;}});export default concat;export var then=(resolve)=>resolve(concat);
