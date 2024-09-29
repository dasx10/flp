var find = (test) => (array) => {
  var length = array.length;
  if (length) {
    var index = 0;
    while (index < length) if(test(array[index++])) return array[index - 1];
  }
};
export default find;
export var then = (resolve) => resolve(find);
