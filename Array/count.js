var count = (call) => (values) => {
  var index = 0, length = values.length, is = 0;
  while (index < length) call(values[index++]) && is++;
  return is;
};
export default count;
export var then=(resolve)=>resolve(count);
