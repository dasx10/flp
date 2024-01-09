import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
import onMap from "../onMap/index.js";
export default memoizeWeak(onMap(memoizeWeak));
