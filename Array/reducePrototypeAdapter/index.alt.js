export default (prototype) => (call) => (value) => (values) => prototype.call(values, (value, next, index, values) => call(value)(next, index, values), value);;
