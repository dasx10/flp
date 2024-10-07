import paramFunction from "../.validator/paramFunction.js";

import findIndex     from "./findIndex.js";
import findIndexLast from "./findLastIndex.js";

var filter = paramFunction((test) => {
  var getIndexLast = findIndexLast(test);
  var getIndex     = findIndex(test);
  return (arrayLike) => {
    var lastIndex = getIndexLast(arrayLike);
    if (lastIndex >= 0) {
      var index = getIndex(arrayLike);
      if (index === lastIndex) return [arrayLike[lastIndex]];
      var create = new Array(lastIndex - index);
      var filteredLength = 0
      while (index < lastIndex) (test(arrayLike[index]) && (create[filteredLength++] = arrayLike[index]), index++);
      create[filteredLength++] = arrayLike[lastIndex];
      if (filteredLength === arrayLike.length) return arrayLike;
      create.length = filteredLength;
      return create;
    }
    return [];
  }
});

export default filter;
export var then=(resolve)=>resolve(filter);
