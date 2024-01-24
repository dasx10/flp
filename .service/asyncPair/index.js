import pair from "../pair/index.js";
export default (call) => (value, next) => Promise.all([value, next]).then(pair(call));
