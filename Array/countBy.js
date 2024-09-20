var countBy=(call)=>(values)=>values.reduce((length,value)=>{
  var key=call(value);
  return (length[key]=(length[key]||0)+1,length);
} ,{});
export default countBy;export var then=(resolve)=>resolve(countBy);
