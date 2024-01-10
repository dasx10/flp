import gt from "../gt/index.js";
export default ((value, next) => (gt(next, value) ? value : next));
