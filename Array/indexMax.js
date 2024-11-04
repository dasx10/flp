import paramArrayNumbers from "../.validator/paramArrayNumbers.js";

var indexMax = paramArrayNumbers((array)=>{
  var max=(array.length-1),index;
  if(max > 0){
    index=max-1;
    while(index--)(array[index]>array[max])&&(max=index);
  }
  return max;
});

export default indexMax;
export var then=(resolve)=>resolve(indexMax);
