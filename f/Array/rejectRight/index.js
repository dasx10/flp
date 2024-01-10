export default (call) => (values) => (values.reduceRight((create, value, index, values) => (call(value, index, values)?(create) : ([value].concat(create))),([])));
