export default (value, call) => Promise.all([value, call]).then(({ 0: value, 1: call }) => call(value));
