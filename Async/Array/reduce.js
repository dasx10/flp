import right from "../../Monad/right.js";

var reduce=(call)=>{
  var exec=right(call);
  return right((create)=>(values)=>values.reduce((create, value)=> exec(right(value))(create), right(create)));
};
export default reduce;
