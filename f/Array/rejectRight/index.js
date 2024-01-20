export default (call) => (values) => values.reduceRight((create, value, index, values) => (call(value, index, values) || create.shift(value), create), []);
