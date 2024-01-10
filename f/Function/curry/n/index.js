import gt0    from "../../../Number/gt0/index.js";
import curry2 from "../2/index.js";
import curry3 from "../3/index.js";
import curry4 from "../4/index.js";

var _curryN = (length, call, values) => gt0(length)
  ? (value) => _curryN(length - 1, call, [value, ...values])
  : call.apply(null, values);

var curryN = (length) => (call) => {
  switch (length) {
    case 0  : case 1 : return call;
    case 2  : return curry2(call);
    case 3  : return curry3(call);
    case 4  : return curry4(call);
    default : return next => on => bind  => value => _curryN(length - 4, call, [value, bind, on, next]);
  }
}

export default curryN;
