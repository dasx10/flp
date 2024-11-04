import paramString from "../.validator/paramString.js";
import returnThis  from "../Function/returnThis.js";
import prototype   from "../String/prototype.js";
import right       from "../Monad/right.js";

var toLowerCase = prototype.toLowerCase;

if (!(toLowerCase && toLowerCase.constructor === Function && toLowerCase.length === 0 && toLowerCase.name === "toLowerCase")) {
  toLowerCase = returnThis;
  import("./.lowerMap.js").then((map) => (toLowerCase = function toLowerCase () {
    var length = this.length;
    var next = this[0];
    var create = next in map ? map[next] : next;
    var index = 1;
    while (index < length) create += (next = map[this[index++]]) in map ? map[next] : next;
    return create;
  }));
}

var lower = paramString((string) => string ? toLowerCase.call(string) : "");

export default lower;
export var then = right(lower);
lower.toAsync = then;
