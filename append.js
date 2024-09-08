var append=(y)=>(x)=>({[Symbol.iterator]:function*(){yield*x;yield y;}});export default append;export var then=(resolve)=>resolve(append);
