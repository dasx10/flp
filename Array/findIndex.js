var findIndex = (call) => (values) => {
  var length = values.length;
  if (length) {
    var index = 0;
    while (index < length) if (call(values[index++])) return index - 1;
  }
  return -1;
};
export default findIndex;
export var then = (resolve) => resolve(findIndex);
