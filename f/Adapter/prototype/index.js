export default (prototype) => (next) => (value) => prototype.call(value, next);
