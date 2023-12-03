export default (call) => (values) => values.map(call).reduceRight((min, value, index, values) => value > values[min] ? min : index, -1);
