var flow = exec => call => next => call(value => next(exec(value)));
export default flow;
