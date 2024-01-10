import isNil   from "../../Logic/isNil/index.js";
import nothing from "../Nothing/index.js";
var just  = value => call => maybe(call(value));
var maybe = value => isNil(value) ? nothing : just(value);
export default maybe;
