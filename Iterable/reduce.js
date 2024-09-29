var reduce=(call)=>(create)=>(values)=>{
  var value, next = create;
  for(value of values)next=call(value)(next);
  return next;
}
export default reduce;
export var then=(resolve)=>resolve(reduce);
