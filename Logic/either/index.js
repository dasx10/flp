export default (next) => (call) => (value) => call(value) || next(value);
