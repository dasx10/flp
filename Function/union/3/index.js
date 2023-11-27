var union3 = call => (value, is, next) => call(next)(is)(value);
export default union3;
