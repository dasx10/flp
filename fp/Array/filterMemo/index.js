import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
import onFilterDimension from "../onFilterDimension/index.js";
export default memoizeWeak(onFilterDimension(memoizeWeak));
