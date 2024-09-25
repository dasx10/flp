export default (call) => (array) => {
  var index = call(array);
  return index >= 0 ? array[index] : void 0;
}
