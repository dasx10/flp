export default () => (value, next, test) => test(value, next) ? value : next;
