import paramArrayNumbers from "../.validator/paramArrayNumbers.js";

var lastIndexMax = (paramArrayNumbers((array) => {
  var length = array.length;
  if (length > 1) {
    var value = (array[--length]),
        next  = (array[--length]),
        max   = next > value ? (value = next, length) : length + 1
    ;

    while (length--) (
      (next = (array[length])),
      (next > value && (max = length, value = next))
    );

    return max;
  }
  return length - 1;
}));

export default lastIndexMax;
export var then = (resolve) => resolve(lastIndexMax);
