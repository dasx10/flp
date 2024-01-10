export default (value, call, next) => (call(value) || next(value));
