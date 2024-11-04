import paramArrayNumbers from "../.validator/paramArrayNumbers.js";

var indexMin = paramArrayNumbers((array)=>{
  var min=(array.length-1),index;
  if(min > 0){
    index=min-1;
    while(index--)(array[index] < array[min]) && (min = index);
  }
  return min
});

export default indexMin;
export var then=(resolve)=>resolve(indexMin);
