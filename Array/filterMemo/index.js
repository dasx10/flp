import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
import filterDimension from "../filterDimension/index.js";
export default memoizeWeak((call) => memoizeWeak(filterDimension(call)));
