export default (value, call, next) => Promise.all([value, call, next]).then(({ 0: value, 1: call, 2: next }) => call(value) && next(value));
