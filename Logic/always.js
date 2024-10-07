var always=(x)=>()=>x;
export default always;
export var then=(resolve)=>resolve(always);

