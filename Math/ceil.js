var ceil=(value)=>value<2147483647?(value|0)
export default ceil;
export var then=(resolve)=>resolve(ceil);
