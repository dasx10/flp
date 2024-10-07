import Void from "../Logic/Void.js";
import len from "./len.js";

var nth = (index) => (index > 0)
  ? (values)=> len(values) > index ? values[index] : void 0
  : Void
;

export default nth;
export var then = (resolve) => resolve(nth);
