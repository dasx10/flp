import _dimension from "../internal/dimension/index.js";
import _reduce    from "../internal/reduce/index.js";

var reject = ((
  _reduce,
  _dimension
) => call => (values) => _dimension(
  values,
  _reduce(values, (values, value) => ((call(value) || values.push(value)), values), []))
)(
  _reduce,
  _dimension
);

export default reject;
