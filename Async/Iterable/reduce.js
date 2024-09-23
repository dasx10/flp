import right from "../../Monad/right.js";

var reduce=(call)=>{
  var exec = right(call);
  return right((init)=>async(values)=>{
    var create=right(init), value;
    if (Symbol.iterator in values) for (value of values) create=exec(right(value))(create);
    else for await(value of values)create=call(right(value))(create);
    return create;
  })
};

export default reduce;
