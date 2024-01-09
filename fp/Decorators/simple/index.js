export default (exec) => (call) => (value) => exec(call(value))(value);
