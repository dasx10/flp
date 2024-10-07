var Object={}.constructor;
var create=Object.create||((value)=>({...value}));
export default create;
export var then=(resolve)=>resolve(create);
