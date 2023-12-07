export default (freeze) => (value) => new Promise(resolve => setTimeout(resolve, freeze, value));
