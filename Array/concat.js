var concat=(tail)=>(head)=>head.concat(tail);
export default concat;
export var then=(x)=>x(concat);
