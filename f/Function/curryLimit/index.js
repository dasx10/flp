import curry2 from "../curry2/index.js";
import curry3 from "../curry3/index.js";
import curry4 from "../curry4/index.js";

var curryLimit = (length, call, values) => length > 0
  ? (value) => curryLimit(length - 1, call, [value, ...values])
  : call.apply(null, values);

export default (length) => {
  switch (length) {
    case 2  : return (call) => curry2(call);
    case 3  : return (call) => curry3(call);
    case 4  : return (call) => curry4(call);
    default : return (call) => curryLimit(length, call, []);
  }
};
