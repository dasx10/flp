export default (value, resolve, reject, test) => Promise.all([value, test]).then(({ 0: value, 1: test }) => test(value)
  ? Promise.resolve(resolve).then((exec) => exec(value))
  : Promise.resolve(reject).then((exec) => exec(value))
);
