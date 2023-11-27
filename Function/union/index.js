var union = call => (...values) => values.reduce((call, value) => call(value), call);
export default union;
