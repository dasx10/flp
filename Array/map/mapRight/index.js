var mapRight = call => values => values
  .reduceRight((create, value, index) => (create[index] = call(value), create), Array(values.length));

export default mapRight;
