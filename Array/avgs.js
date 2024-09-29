var avgs=(values)=>{
  var length = values.length;
  if (length) {
    var value = 0;
    var index = 0;
    while (index < length) value += values[index++];
    return value / length;
  }
  else return NaN;
}
export default avgs;
export var then=(resolve)=>resolve(avgs);
