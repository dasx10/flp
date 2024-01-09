export default (values) => values.reduceRight((max, value, index, values) => value < values[max] ? max : index, -1);
