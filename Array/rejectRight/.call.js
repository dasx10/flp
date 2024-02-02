export default (values, call) => values.reduceRight((create, value, index, values) => (call(value, index, values) || create.shift(value), create), []);
