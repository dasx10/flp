export default (((values, call) => (values.reduceRight(
  ((create, value, index, values) => (((call(value, index, values)) && (create.unshift(value))), create)),
  ([])
))));
