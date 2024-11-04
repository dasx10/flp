import right from "../Monad/right";

var entries = function*(value) {
  var key;
  for(key in value) yield [ key,value[key] ]
};

export default entries;
var then = right(entries);
entries.fromAsync = then;
