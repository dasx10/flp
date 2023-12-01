import identity from "../../Logic/identity/index.js";
import neEmpty from "../ne/empty/index.js";
export default (next) => neEmpty(next) ? (values) => neEmpty(values) ? values.concat(next) : next : identity;
