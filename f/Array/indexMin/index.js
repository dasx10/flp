export default (values) => values.reduceRight((min, value, index, values) => value > values[min] ? min : index, -1);
