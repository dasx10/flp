var by = exec => call => next => value => call(exec(next))(exec(value));
export default by;
