var rejectRight = call => values => values.reduceRight((create, value) => (call(value) || create.push(value), create), []);
export default rejectRight;
