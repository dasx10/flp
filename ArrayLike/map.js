import Array          from "../Array/Array.js";
import right          from "../Monad/right.js";
import paramArrayLike from "../.validator/paramArrayLike.js";
import paramFunction  from "../.validator/paramFunction.js";

var map = paramFunction((call) => paramArrayLike((arrayLike) => {
  var length = arrayLike.length;
  var index  = 0;
  var create = new Array(length);
  while (index < length) create[index] = call(arrayLike[index++]);
  return create;
}));

export default map;
export var then = right(map);
map.toAsync = then;
