import neNil from "../../Logic/ne/nil/index.js";
export default (call) => neNil(call) && call.constructor === Function;
