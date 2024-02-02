export default (value, exec, test) => test(value) ? value : exec(value);
