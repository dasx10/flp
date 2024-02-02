export default (value, exec, test) => test(value) ? exec(value) : value;
