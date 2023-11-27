var on = exec => call => next => is => value => exec(is)(call(next)(value));
export default on;
