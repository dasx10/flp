var sumBy = (call) => (values) => {
  var index = 0, length = values.length, value = 0;
  while (index < length) value += call(values[index++]);
  return value;
};
export default sumBy;
export var then = (resolve) => resolve(sumBy);
