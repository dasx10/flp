var flip = call => value => next => call(next)(value);
export default flip;
