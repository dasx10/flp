var indexMax=(array)=>{
  var max=(array.length-1),index;
  if(max>0){
    index=max-1;
    while(index--)(array[max]<array[index])&&(max=index);
  }
  return max
};
export default indexMax;
export var then=(resolve)=>resolve(indexMax);
