import memoize from "../../Decorators/memoize/index.js";
import flip from "../../Function/flip/index.js";
import indexed from "../indexed/index.js";
export default memoize((key) => flip(indexed(key)));
