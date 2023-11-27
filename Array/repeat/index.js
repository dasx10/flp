import always   from "../../Function/always/index.js";
import eq1      from "../../Number/eq1/index.js";
import gt1      from "../../Number/gt1/index.js";
import empty    from "../empty/index.js";
import notEmpty from "../notEmpty/index.js";

var repeat = length => eq1(length) ? empty : gt1(length) ? (values => notEmpty(values)
  ? Array.from({ length: length }, always(values)).flat()
  : empty()
) : empty;

export default repeat;
