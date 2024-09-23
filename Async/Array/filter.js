import right from "../../Monad/right.js";
var filter=(call)=>{
  var exec=right(call);
  return right((values)=>values.reduce((from,value)=>from((values)=>right(value)((value)=>exec(value)((is)=>is?values.concat(value):values))),right([])));
}
export default filter;
