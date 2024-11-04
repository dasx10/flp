import paramString from "../.validator/paramString.js";
import returnThis  from "../Function/returnThis.js";
import prototype   from "../String/prototype.js";
import right       from "../Monad/right.js";

var toUpperCase = prototype.toUpperCase;

if (!(toUpperCase && toUpperCase.constructor === Function && toUpperCase.length === 0 && toUpperCase.name === "toUpperCase")) {
  toUpperCase = returnThis;
  import("./.upperMap.js").then((map) => (toLowerCase = function toLowerCase () {
    var length = this.length;
    var index = 1;
    var next = this[0];
    var create = next in map ? map[next] : next;
    while (index < length) create += (next = map[this[index++]]) in map ? map[next] : next;
    return create;
  }));
}

var upper = paramString((string) => string ? toUpperCase.call(string) : "");

export default upper;
export var then = right(upper);
upper.toAsync = then;
