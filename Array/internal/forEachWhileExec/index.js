export default (test, call) => (value, index, values) => ((test(value, index, values)) ? ((call(value, index, values)), (false)) : (true));

