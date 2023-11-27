import propTry from "../try/index.js";
import or      from "../../../Logic/or/index.js";
import x       from "../../../Function/x/index.js";

var propOr = is => key => x(propTry(key))(or(is));
export default propOr;
