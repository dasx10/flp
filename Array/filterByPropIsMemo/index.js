import memoize from "../../Decorators/memoize/index.js";
import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
import filterDimension from "../filterDimension/index.js";
export default memoize((key) => memoize((test) => memoizeWeak(filterDimension((value) => value[key] === test))));
