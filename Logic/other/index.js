export default (next) => (call) => (value) => next(value) || call(value);
