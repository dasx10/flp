import id from "../Logic/id.js";
import { left, right } from "./either.js";

var promise = (exec) => {
  var fulfilled = ("then" in exec) ? (exec.then === exec) ? exec : right(exec) : null,
      onDone,
      onError
  ;

  fulfilled||exec(
    (value)=>(fulfilled=right(value),onDone&&onDone(value)),
    (error)=>(fulfilled=left(error),onError&&onError(error))
  );

  return fulfilled || (
    fulfilled=(new Promise((resolve,reject) => (onDone = resolve, onError = reject))),
    fulfilled.then(id, id),
    fulfilled=right(fulfilled)
  );
};

export default promise;
export var then = (resolve) => resolve(promise);
