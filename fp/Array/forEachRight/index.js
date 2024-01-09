export default (call) => (values) => values.reduceRight((values, value, index) => (call(value, index, values), values), values);
