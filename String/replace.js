import prototype   from "../String/prototype.js";
import paramString from "../.validator/paramString.js";
import right       from "../Monad/right.js";

var prototypeReplace = prototype.replace;
var replace = (searchValue) => (replacer) => paramString((string) => prototypeReplace.call(string, searchValue, replacer));

export default replace;
export var then = right(replace);
replace.toAsync = then;
