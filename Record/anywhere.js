var anywhere=(test)=>(object)=>{
  var key;
  for(key in test) if(test[key](object[key])) return true;
  return false
};
export default anywhere;
export var then=(resolve)=>(resolve(anywhere));
