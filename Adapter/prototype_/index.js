export default ((prototype) => ((value) => ((next) => (prototype.call(value, next)))));
