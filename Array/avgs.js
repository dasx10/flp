import paramArray from "../.validator/paramArray.js";

var avgs = paramArray((values)=>{
  var length = values.length;
  if (length > 0) {
    var value = 0;
    var index = 0;
    while (index < length) value += values[index++];
    return value / length;
  }
  return NaN;
});

export default avgs;
export var then=(resolve)=>resolve(avgs);
