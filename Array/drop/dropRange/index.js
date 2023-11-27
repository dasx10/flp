import gt0 from "../../Number/gt0/index.js";

var _dropRange = (values, min, max) => values.slice(0, min).concat(values.slice(max));

var dropRange = min => gt0(min)
  ? max => max > min
    ? values => _dropRange(values, min, max)
    : gt0(max)
      ? values => _dropRange(values, max, min)
      : values => (values.length + max) > min
        ? _dropRange(values, min, max)
        : _dropRange(values, max, min)

  : max => gt0(max)
    ? values => (values.length + min) > max
      ? _dropRange(values, max, min)
      : _dropRange(values, min, max)

    : max > min
      ? values => _dropRange(values, min, max)
      : values => _dropRange(values, max, min);

export default dropRange;
