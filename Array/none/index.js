export default (call) => (values) => !values.every((value, index, values) => call(value, index, values));
