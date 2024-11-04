import redux from "./.redux.js";
import promise from"./promise.js";

var future = (exec) => {
  var fullfiled;
  return redux((resolve, reject) => fullfiled
    ? fullfiled(resolve, reject)
    : (fullfiled = promise(exec))(resolve, reject)
  );
};

export default future;
export var then = future;
