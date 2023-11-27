var both = next => call => value => next(value) && call(value);
export default both;
