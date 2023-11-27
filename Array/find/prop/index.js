import propTrust from "../../Object/propTrust/index.js";
import xFind from "../x/find/index.js";

var findProp = key => xFind(propTrust(key));
export default findProp;
