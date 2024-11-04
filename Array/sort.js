import Array from "./Array.js";

var quickSortMutation = (values, call, left, right) => {
  var tmp;
  var leftIndex = left;
  var rightIndex = right;
  var pivot = values[Math.floor((left + right) / 2)];
  while (leftIndex <= rightIndex) {
    while (call(values[leftIndex])(pivot) > 0) leftIndex++;
    while (call(values[rightIndex])(pivot) < 0) rightIndex--;
    if (leftIndex <= rightIndex) {
      tmp = values[leftIndex];
      values[leftIndex] = values[rightIndex];
      values[rightIndex] = tmp;
      leftIndex++;
      rightIndex--;
    }
  }

  if (left < leftIndex - 1) quickSortMutation(values, call, left, leftIndex - 1);
  if (leftIndex < right) quickSortMutation(values, call, leftIndex, right);
  return values;
}

var presort = (values, call) => {
  var length = values.length;
  var create = new Array(length);
  length--;
  if (call(values[length])(values[length - 1]) > 0) {
    create[length] = values[length - 1];
    create[length - 1] = values[length];
  } else {
    create[length] = values[length];
    create[length - 1] = values[length - 1];
  }
  length--;

  while (length--) {
    if (call(values[length])(values[length - 1]) > 0) {
      create[length] = values[length - 1];
      create[length - 1] = values[length];
    } else {
      create[length] = values[length];
      create[length - 1] = values[length - 1];
    }
    if (length === 1) {
      create[0] = values[0];
      return create;
    }
  }
  return create;
}

var sort = (call) => (values) => values.length > 1
  ? quickSortMutation(presort(values, call), call, 0, values.length - 1)
  : values
;

export default sort;
export var then = (resolve) => resolve(sort);
