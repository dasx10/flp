var filterRight = call => values => values.reduceRight((create, value) => (call(value) && create.unshift(value), create), []);
export default filterRight;
