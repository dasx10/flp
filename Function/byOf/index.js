export default (call) => (replace) => (next) => (value) => call(replace(next))(replace(value));
