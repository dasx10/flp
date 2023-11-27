var union2 = call => (value, next) => call(next)(value);
export default union2;
