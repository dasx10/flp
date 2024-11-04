import Function from "../Function/Function.js";
import Object from "../Object/Object.js";
import constructor from "../constructor.js";

var Array = constructor([]) ||
  (globalThis && globalThis.Array && globalThis.Array === Function && globalThis.Array.length === 1 && globalThis.Array.name === "Array" && globalThis.Array) ||
  (function (...values) {
  if (values.length === 1 && "constructor" in Object(values[0]) && values[0].constructor === Number) {
    var create = [];
    create.length = values[0];
    return create;
  }
  return values;
});

export default Array;
