import paramSyncFunction from "../.validator/paramSyncFunction.js";
import paramArrayLike    from "../.validator/paramArrayLike.js";

var avgsBy = paramSyncFunction((call) => paramArrayLike((values)=> {
  var length = values.length;
  if (length > 0) {
    var value = 0;
    var index = 0;
    while (index < length) value += call(values[index++]);
    return value / length;
  }
  return NaN;
}));

export default avgsBy;
export var then=(resolve)=>resolve(avgsBy);
