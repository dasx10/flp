import isNil   from "../../Logic/isNil/index.js";
import nothing from "../Nothing/index.js";
var maybe = (value) => (isNil(value)) ? nothing : just(value);
var just  = (value) => (call) => maybe(call(value));
export default maybe;
