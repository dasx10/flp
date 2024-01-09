export default (call) => (exec) => (next) => (value) => call(exec(next))(exec(value));
