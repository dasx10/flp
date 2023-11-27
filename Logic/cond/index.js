import all  from "../../Array/all/index.js";
import any  from "../../Array/any/index.js";
import pipe from "../../Composition/pipe/index.js";
import ap   from "../../Function/ap/index.js";
import flip from "../../Function/flip/index.js";

var cond = flip(pipe([ap, all, any]));
export default cond;
