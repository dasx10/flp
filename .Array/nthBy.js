var nthBy = (call) => (array) => {
  var index = call(array);
  return index >= 0 ? array[index] : void 0;
};
export default nthBy;
export var then = (resolve) => resolve(nthBy);
