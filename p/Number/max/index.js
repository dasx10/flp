import lt from "../lt/index.js";
export default ((value, next) => (lt(value, next) ? value : next));
