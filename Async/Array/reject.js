import promise from "../Monad/promise.js";
import right from "../Monad/right.js";

export default (call)=>(values)=>promise((resolve, reject) => {
  var length = values.length;
  var create = new Array();
  var is = 0;
  var i=0;
  right(call)((call) => {
    while(i<length) {
      right(values[i])((value)=>((call(value)||(create.push(value)),++is===length)&&resolve(create)), reject);
      i++;
    }
  },reject);
});
