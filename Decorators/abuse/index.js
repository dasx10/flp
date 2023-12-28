export default (exec) => (call) => (value) => exec(value)(call(value));
