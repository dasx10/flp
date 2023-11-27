var also = call => next => value => next(value) && call(value);
export default also;
