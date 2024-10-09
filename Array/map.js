import Array from "./Array.js";
import paramFunction from "../.validator/paramFunction.js";
import paramArrayLike from "../.validator/paramArrayLike.js";

var map = paramFunction((call) => paramArrayLike((values) => {
  var index = 0, length = values.length, create = Array(length);
  while (index < length) create[index] = call(values[index++]);
  return create;
}));

export default map;
export var then = (resolve) => resolve(map);
