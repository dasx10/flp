import memoize from "../../Decorators/memoize/index.js";
import oMemoizeWeak from "../../Decorators/oMemoizeWeak/index.js";
import prop from "../prop/index.js";
export default memoize(oMemoizeWeak(prop));
