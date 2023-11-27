export default next => value => new Promise(resolve => setTimeout(resolve, next, value));
