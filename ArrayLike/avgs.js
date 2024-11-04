import paramArrayLikeNumbers from "../.validator/paramArrayLikeNumbers.js";
import right from "../Monad/right.js";

var avgs = paramArrayLikeNumbers((values) => {
  var length = values.length;
  if (length > 0) {
    var value = 0;
    var index = 0;
    while (index < length) value += values[index++];
    return value / length;
  }
  return NaN;
});

export default avgs;
export var then = right(avgs);
avgs.toAsync = then;
