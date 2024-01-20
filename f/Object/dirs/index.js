import bank from "../../Composition/bank/index.js";
import dir from "../dir/index.js";
export default (keys) => bank(keys.map(dir))
