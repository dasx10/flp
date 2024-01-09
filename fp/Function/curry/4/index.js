var curry4 = call => next => on => bind => value => call(value, bind, on, next);
export default curry4;
