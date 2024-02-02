export default Array.prototype.toSplices
  ? (values, min, max) => values.toSplices(min, max)
  : (values, min, max) => values.slice(0, min).concat(values.slice(max));
