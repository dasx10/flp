import always   from "../../Function/always/index.js";
import gt1      from "../../Number/gt1/index.js";
import isOne from "../../Number/isOne/index.js";
import empty    from "../empty/index.js";
import notEmpty from "../notEmpty/index.js";

var repeat = length => isOne(length) ? empty : gt1(length) ? (values => notEmpty(values)
  ? Array.from({ length: length }, always(values)).flat()
  : empty()
) : empty;

export default repeat;
