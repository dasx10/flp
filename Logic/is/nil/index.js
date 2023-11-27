import something   from "../../../Composition/something/index.js";
import isUndefined from "../undefined/index.js";
import isNull      from "../null/index.js";

var isNil = something([isUndefined, isNull]);
export default isNil;
