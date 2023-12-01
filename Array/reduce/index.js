export default ((reduce) => (call) => (value) => (values) => reduce.call(values, (value, next, index, values) => call(value)(next, index, values), value))(Array.prototype.reduce);
