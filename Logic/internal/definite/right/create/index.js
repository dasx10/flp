export default () => (value, next, test) => test(next, value) ? value : next;
