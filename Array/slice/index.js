export default (next) => (value) => (values) => values.slice(value, next);
