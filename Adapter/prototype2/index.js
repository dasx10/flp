export default (prototype) => (is) => (next) => (value) => prototype.call(value, next, is);
