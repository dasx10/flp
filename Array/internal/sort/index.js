import binary from "../../../Function/binary/index.js";

export default (values, call) => (values.reduce((create, value, index, values) => ((call(value)(values.at(index - 1)))
  ? (create[index] = value)
  : ((create[index] = values.at(index - 1)))
  , (create)
) , Array(values.length))).sort(binary(call));
