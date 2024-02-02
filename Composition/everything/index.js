import ap from "../../Function/ap/index.js";
export default (values) => (value) => values.every(ap(value));
