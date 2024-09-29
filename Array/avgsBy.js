var avgsBy= (call) => (values)=> {
  var length = values.length;
  if (length) {
    var value = 0;
    var index = 0;
    while (index < length) value += call(values[index++]);
    return value / length;
  }
  else return NaN;
}
export default avgsBy;
export var then=(resolve)=>resolve(avgsBy);
