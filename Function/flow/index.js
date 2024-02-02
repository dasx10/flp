export default (exec) => (call) => (next) => call((value) => next(exec(value)));;
