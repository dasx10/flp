import first  from "../../../first/index.js";
import second from "../../../second/index.js";
export default (values, call) => call(first(values))(second(values)) ? [second(values), first(values)] : values;
