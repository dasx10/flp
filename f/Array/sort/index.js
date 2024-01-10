import sort  from "../internal/sort/index.js";
import sort2 from "../internal/sort/2/index.js";
import sort3 from "../internal/sort/3/index.js";
import binary from "../../Function/binary/index.js";

export default Array.prototype.toSorted
  ? (call) => (values) => values.toSorted(binary(call))
  : (call) => (values) => {
    switch (values.length) {
      case 0  :
      case 1  : return values;
      case 2  : return sort2(values, call);
      case 3  : return sort3(values, call);
      default : return sort (values, call);
    }
  }
;
