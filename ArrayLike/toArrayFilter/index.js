import empty  from "../../Array/empty/index.js";
import gt0    from "../../Number/gt0/index.js";
import length from "../length/index.js";

var _filter = (values, call, length, create, index, value) => index < length
  ? _filter(values, call, length, call(value = values[index]) ? create.concat(value) : create, index + 1)
  : create;

var toArrayFilter = call => values => gt0(length)
  ? _filter(values, call, length(values), empty(), 0)
  : empty();

export default toArrayFilter;
