import eq from "../../Object/eq/index.js";
export default (values) => values.reduce((create, value) => create.some(eq(value)) ? create : create.concat(value), []);
