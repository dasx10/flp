export default (values, call) => values.reduce((create, value, index, values) => (call(value, index, values) || create.push(value), create), []);
