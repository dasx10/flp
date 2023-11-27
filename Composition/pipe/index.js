var next = (value, call) => call(value);
export default values => value => values.reduce(next, value);
