import nothing from "../../Monads/Nothing/index.js";
import ifNotEmpty from "../ifNotEmpty/index.js";
var ifNotEmptyNothing = ifNotEmpty(nothing);
export default ifNotEmptyNothing;
