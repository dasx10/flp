var union4 = call => (value, is, of, next) => call(next)(of)(is)(value);
export default union4;
