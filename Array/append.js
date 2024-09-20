var append=(value)=>(values)=>[...values, value];
export default append;
export var then=(resolve)=>resolve(append);
