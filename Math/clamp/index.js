import NAN from "../NAN/index.js";

var clump = ((clump, isNaN, NAN, ANAN, Number) => min => isNaN(min)
  ? ANAN
  : max => isNaN(max)
    ? NAN
  : (
      (min = Number(min)),
      (max => isNaN(max)
        ? NAN
        : (max = Number(max), min > max)
          ? value => clump(value, max, min)
          : value => clump(value, min, max)
    )
  )
)(
    (value, min, max) => min > value ? min : max < value ? max : value,
    isNaN,
    NAN,
    () => NAN,
    Number,
  )
;

export default clump;
