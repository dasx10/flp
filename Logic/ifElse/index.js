export default (test) => (reject) => (resolve) => (value) => test(value) ? resolve(value) : reject(value);
