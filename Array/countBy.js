var create = Object.create;
var countBy = (call) => (array) => {
  var object = create(null), length = array.length, index = 0, key;
  while (index < length) object[key = call(array[index++])] = (object[key] || 0) + 1;
  return object;
};
export default countBy;
export var then = (resolve) => resolve(countBy);
