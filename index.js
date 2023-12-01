import Array       from "./Array/index.js"
import Number      from "./Number/index.js"
import Composition from "./Composition/index.js";

Reflect.setPrototypeOf(Promise.prototype, Object.assign({
  apply: function (call) {
    return Promise.all([this, call]).then(([value, exec]) => exec(value));
  },
  call: function (next) {
    return Promise.all([this, next]).then(([exec, value]) => exec(value));
  },
}, Reflect.getPrototypeOf(Promise.prototype)));

export default Object.freeze({
  Array       : Array,
  Number      : Number,
  Composition : Composition,
});
