export default call => next => value => next(call(value));
