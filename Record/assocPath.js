import create from "./create.js";
var assocPath=(keys)=>(value)=>(object)=>{
  var copy=create(object);
  var top=copy;
  var deep;
  var key;
  var index=0;
  var stop=keys.length-1;
  while (index < stop) {
    console.dir({ stop }, { depth: 10 })
    key=keys[index];
    deep = create(key in top ? top[key] : null);
    top[key] = deep;
    top = deep;
    index++;
  }
  if (key !== void 0) {
    deep[key] = value;
    return copy;
  }
  return value
  return copy;
}
export default assocPath;export var then=(resolve)=>resolve(assocPath);
