import paAsync from "../../Function/paAsync/index.js";
import create from "../../.service/composeAsync/index.js";
export default create(paAsync, Array.prototype.reduce);
