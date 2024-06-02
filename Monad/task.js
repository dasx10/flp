import future  from "./future.js";
import promise from "./promise.js";

var o = [];
var is = 0;
var next = (value) => (is--,((o.length>0)&&o.shift()()),(value));
var task = (call) => future((resolve, reject) => (is)
  ? promise((right, left) => o.push(() => call(
    (x)=>left(resolve(next(x))),
    (e)=>right(reject(next(e)))
  )))
  : (is++, call(
    (x)=>(resolve(next(x))),
    (e)=>(reject(next(e)))
  ))
)
;

export default task;
