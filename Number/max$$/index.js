import gt from "../gt$$/index.js";
export default ((value, next) => (gt(value, next) ? value : next));
