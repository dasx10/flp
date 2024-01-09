import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
import onFind from "../onFind/index.js";
export default memoizeWeak(onFind(memoizeWeak));
