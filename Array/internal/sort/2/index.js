import gt0    from "../../../../Number/gt/0/index.js";
import first  from "../../../first/index.js";
import second from "../../../second/index.js";

var _sort2 = ((
  gt0,
  first,
  second
) => (values, call) => gt0(call(first(values))(second(values))) ? [second(values), first(values)] : values)(
  gt0,
  first,
  second
);

export default _sort2;
