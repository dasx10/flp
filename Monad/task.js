import Array    from "../Array/Array.js";
import Function from "../Function/Function.js";

import future  from "./future.js";
import promise from "./promise.js";

var shift = (Array.prototype && Array.prototype.shift);
if (!(shift && "constructor" in Object(shift) && shift.construcot === Function)) shift = function () {
  if (this.length >= 1) {
    var value = this[0];
    this.length -= 1;
    return value;
  }
};

var queue      = new Array();
var queueIndex = 0;
var addQueue   = (process) => ((queueIndex--), ((queue.length > 0) && shift.call(queue)()), (process));

var task = (exec) => future((resolve,reject)=>(queueIndex)
  ? promise((right,left)=>queue.push(() => exec(
      (value)=>left(resolve(addQueue(value))),
      (error)=>right(reject(addQueue(error)))
    )
  ))
  : ((queueIndex++),
    exec(
      (value)=>(resolve(addQueue(value))),
      (error)=>(reject(addQueue(error)))
    )
  )
)
;

export default task;
