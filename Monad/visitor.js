import { left, right } from "./either.js";
import promise         from "./promise.js";
import redux           from "./.redux.js";

var visitor = (exec) => {
  var status  = 1,
      process = promise(exec)
  ;

  process(
    () => (status = 0),
    () => (status = 0)
  );

  return redux(
    (resolve, reject) => ((status || ((status = 1),
      (exec(
        ((value)  => ((process = right(value)), (status=0))),
        ((reason) => ((process = left(reason)), (status=0)))
      ))
    )),
    (process(resolve,reject))
  ));
};

export default visitor;
export var then = (resolve) => resolve(visitor);
