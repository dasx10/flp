var contains = (value) => (values)=> {
  var length = values.length;
  while (length--) if (values[length] === value) return true;
  return false;
};
export default contains;
export var then = (resolve) => resolve(contains);
