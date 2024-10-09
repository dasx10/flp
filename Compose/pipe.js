import paramArrayLikeFunctions from "../.validator/paramArrayLikeFunctions.js";

var pipe = paramArrayLikeFunctions((functions) => (value) =>{
  var length = functions.length;
  var index = 0;
  while (index < length) value = functions[index++](value);
  return value;
});

export default pipe;
export var then=(resolve)=>resolve(pipe);
