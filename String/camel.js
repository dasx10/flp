import replace from "./replace.js";
import upper from "./upper.js";
var camel = replace(/[^a-z\d]+(.)/g)((_, c) => upper(c));
export default camel;
