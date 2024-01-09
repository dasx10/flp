var chain = call => value => (call(is => value = value(is)), value);
export default chain;
