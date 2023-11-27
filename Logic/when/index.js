var when = test => call => value => test(value) ? call(value) : value;
export default when;
