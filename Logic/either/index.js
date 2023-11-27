var either = call => next => value => call(value) || next(value);
export default either;
