export default (call) => (values) => (values.reduceRight((create, value, index, values) => call(value, index, values) ? [index].concat(create) : create, []));
