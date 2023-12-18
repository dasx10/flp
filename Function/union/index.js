export default (call) => (...values) => values.reduce((call, value) => call(value), call);
