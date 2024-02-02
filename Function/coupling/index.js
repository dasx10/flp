var coupling = exec => call => next => value => is => exec(next)(call(value)(is));
export default coupling;
