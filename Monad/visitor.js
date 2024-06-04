import { left, right } from "./either.js";
import promise from "./promise.js";

var then = (then) => (then.then = then);
var visitor=(exec) => {
  var o=1;
  var i=promise(exec);
  i(()=>(o=0),()=>(o=0));
  return then((resolve, reject)=>(
    (o||(o=1,exec((x)=>(i=right(x),o=0),(e)=>(i=left(e),o=0)))),
    i(resolve, reject))
  );
};

export default visitor;
