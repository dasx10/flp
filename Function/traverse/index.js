export default call => values => value => values.reduce((value, next) => call(next)(value), value);
