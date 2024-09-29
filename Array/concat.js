import id from "../Logic/id.js";
var concat=(y)=>{
  var yLength = y.length;
  return yLength ? (x) => {
    var xLength = x.length;
    if (xLength) {
      var create = Array(yLength + xLength);
      var index = xLength;
      while (index--) create[index] = x[index];
      index = yLength;
      while (index--) create[xLength + index] = y[index];
      return create;
    }
    return y;
  } : id;
}
export default concat;
export var then=(resolve)=>resolve(concat);
