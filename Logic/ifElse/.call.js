export default (value, resolve, reject, test) => test(value) ? resolve(value) : reject(value);
