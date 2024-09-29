var append = (value) => (array) => {
  var length = array.length, create = Array(length + 1);
  create[length] = value;
  while (length--) create[length] = array[length];
  return create;
};
export default append;
export var then=(resolve)=>resolve(append);
