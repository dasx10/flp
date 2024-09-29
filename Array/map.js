var Array = [].constructor;
var map = (call) => (values) => {
  var index = 0, length = values.length, create = Array(length);
  while (index < length) create[index] = call(values[index++]);
  return create;
}
export default map;
export var then = (resolve) => resolve(map);
