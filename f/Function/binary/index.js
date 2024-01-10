export default ((call) => ((value, next) => (call(next)(value))));
