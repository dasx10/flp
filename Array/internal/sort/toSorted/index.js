var toSorted = Array.prototype.toSorted
  ? Array.prototype.toSorted
  : ({ call: (values, call) => (values).slice().sort(call) })
;

export default toSorted;
