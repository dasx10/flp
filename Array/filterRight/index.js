export default (call) => (values) => values.reduceRight((create, value, index, values) => (call(value, index, values) ? [value].concat(values) : create), []);
