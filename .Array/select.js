import paramArray            from "../.validator/paramArrayLike.js";
import paramArrayLikeNumbers from "../.validator/paramArrayLikeNumbers.js";

var select=paramArrayLikeNumbers((indexes)=>paramArray((array)=>{
  var length = indexes.length;
  var create = Array(length);
  var count  = 0;
  var index  = 0;
  while (index < length) {
    var key = indexes[index];
    if (key < 0) key = array.length + key;
    if (key < array.length) create[count++] = array[key];
    index++;
  }
  create.length = count;
  return create;
}));

export default select;
export var then=(resolve)=>resolve(select);
