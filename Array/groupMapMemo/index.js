import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
import onGroupMap from "../onGroupMap/index.js";
export default memoizeWeak(onGroupMap(memoizeWeak));
