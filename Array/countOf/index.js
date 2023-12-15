export default (length) => (call) => (values) => values.reduce((length, value, index, values) => call(value, index, values) ? (length + 1) : (length), length);
