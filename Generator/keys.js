import right from "../Monad/right.js";

var keys = function*(value) {
  var key;
  for(key in value) yield key
}

export default keys;
var then = right(keys);
keys.fromAsync = then;
