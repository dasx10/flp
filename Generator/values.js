import right from "../Monad/right.js";

var values = function*(value){
  var key;
  for(key in value) yield value[key]
};

export default values;
export var then = right(values);
values.fromAsync = then;
