import Array from "./Array.js";
import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var filter = paramSyncFunction((test) => paramArrayLike((array) => {
  var length = array.length;
  if (length > 0) {
    var lastIndex = length;
    while (lastIndex-- && !test(array[lastIndex]));
    if (lastIndex === 0) return [array[0]];
    if (lastIndex > 0) {
      var index = 0;
      while (index < lastIndex && !test(array[index])) index++;
      if (index === lastIndex) return [array[index]];
      var create = new Array(lastIndex - index);
      create[0] = array[index];
      var filteredLength = 1;
      while (++index < lastIndex) (test(array[index]) && (create[filteredLength++] = array[index]));
      create[filteredLength++] = array[lastIndex];
      if (create.length !== filteredLength) create.length = filteredLength;
      return create;
    }
  }
  return [];
}));

export default filter;
export var then=(resolve)=>resolve(filter);
