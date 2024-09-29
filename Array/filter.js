var filter = (test) => (array) => {
  var length = array.length;
  if (length > 0) {
    var create = test(array[0]) ? [array[0]] : [], index = 1;
    while (index < length) (test(array[index]) && (create[create.length++] = array[index]), index++);
    return create;
  }
  return array;
}
export default filter;
export var then=(resolve)=>resolve(filter);
