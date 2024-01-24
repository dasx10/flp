export default (freeze) => (next) => (call) => setInterval(call, next, freeze);
