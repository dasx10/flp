import _dimension from "../internal/dimension/index.js";

var filter = ((filter) => call => values => _dimension(
  values,
  filter.call(values, call)
))(
  Array.prototype.filter
);

export default filter;
