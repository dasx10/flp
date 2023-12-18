export default (exec) => (call) => (next) => (value) => call(exec(next))(exec(value));
