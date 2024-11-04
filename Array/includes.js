import paramArray from "../.validator/paramArray.js";
import paramInt   from "../.validator/paramInt.js";

var includes = paramInt((index) => (index < 0)
  ? (value) => paramArray((values) => {
    var from = values.length + index;
    while (from > 0) if (values[from] === value) return true; else --from;
    return false;
  })
  : (value) => paramArray((values) => {
    var from = index;
    var length = values.length;
    while (from < length) if (values[from] === value) return true; else ++from;
    return false;
  })
);

export default includes;
export var then = (resolve) => resolve(includes);
