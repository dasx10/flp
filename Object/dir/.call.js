import prop from "../prop/index.js";
export default (value, keys) => keys.reduce(prop, value);
