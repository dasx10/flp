import eq from "../../Object/eq/index.js";
export default (values) => values.reduceRight((create, value) => create.some(eq(value)) ? create : [value].concat(create), []);
