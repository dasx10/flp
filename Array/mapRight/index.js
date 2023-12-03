export default (call) => (values) => values.reduceRight((create, value, index, values) => (create[index] = call(value, index, values), create), Array(values.length));
