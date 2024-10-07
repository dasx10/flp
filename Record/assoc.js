import create from "./create.js";
var assoc=(key)=>(value)=>(object)=>{
  var copy=create(object);
  copy[key]=value;
  return copy;
}
export default assoc;
export var then=(resolve)=>resolve(assoc);
