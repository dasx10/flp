export default values => value => values.reduceRight((value, call) => call(value), value);
