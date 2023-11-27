import gt0    from "../../../../Number/gt/0/index.js";
import first  from "../../../first/index.js";
import second from "../../../second/index.js";

var _sort3 = ((
  gt0,
  first,
  second,
) => (values, call) => gt0(call(first(values))(second(values)))
  ? gt0(call(second(values))(values[2]))
    ? [values[2], second(values), first(values)]
    : gt0(call(first(values))(values[2]))
      ? [second(values), values[2], first(values)]
      : [second(values), first(values), values[2]]
  : gt0(call(second(values))(values[2]))
    ? gt0(call(first(values))(values[2]))
      ? [values[2], first(values), second(values)]
      : [first(values), values[2], second(values)]
    : values
)(
  gt0,
  first,
  second,
)
;

export default _sort3;
