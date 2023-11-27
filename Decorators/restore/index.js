var restore = call => test => (value, is) => test(value)(is = call(value)) ? value : is;
export default restore;
