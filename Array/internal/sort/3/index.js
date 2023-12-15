import first  from "../../../first/index.js";
import second from "../../../second/index.js";

export default (values, call) => call(first(values))(second(values))
  ? call(second(values))(values[2])
    ? [values[2], second(values), first(values)]
    : call(first(values))(values[2])
      ? [second(values), values[2], first(values)]
      : [second(values), first(values), values[2]]
  : call(second(values))(values[2])
    ? call(first(values))(values[2])
      ? [values[2], first(values), second(values)]
      : [first(values), values[2], second(values)]
    : values
;
