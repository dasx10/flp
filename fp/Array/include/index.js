import lt    from "../../Number/internal/lt/index.js";
import neNeg from "../../Number/neNeg/index.js";

export default (index) => (value) => (values) => {
  var length = values.length;
  return (
    neNeg(length)
    ? lt(index, length)
      ? values.slice(0, index).concat([value], values.slice(index, length))
      : values.concat(value)
    : [value]
  )
};
