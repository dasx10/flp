import future  from "./future.js";
import promise from "./promise.js";

var values = [];
var is = 0;
var next = (value) => (is--, ((values.length > 0) && values.shift()()), (value));
var task = (call) => future((resolve, reject) => (is)
  ? promise((right, left) => values.push(() => call(
    (value) => left(resolve(next(value))),
    (error) => right(reject(next(error)))
  )))
  : (is++, call(
    (value) => (resolve(next(value))),
    (error) => (reject(next(error)))
  ))
)
;

export default task;
