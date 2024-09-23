import right from "../../Monad/right.js";
var {iterator,asyncIterator}=Symbol;

var reject=(call)=>(
  ("then" in call)
    ? (values) => (
      (iterator in values)?({
        [asyncIterator]:async function*(){
          var value,exec=right(call);
          for(value of values)(await exec(value))||(yield value);
        },
      })
      :
      (asyncIterator in values)?({
        [asyncIterator]:async function*(){
          var value,exec=right(call);
          for await(value of values)(await exec(value))||(yield value);
        },
      })
      :
      ({
        [asyncIterator]:async function*(){
          var value,exec=right(call),iterable=await values;
          if (iterator in iterable) for(value of iterable)(await exec(value))||(yield value);
          else for await(value of iterable)(await exec(value))||(yield value);
        },
      })

    )
    : (values) => (
      (iterator in values)?({
        [asyncIterator]:async function*(){
          var value,is;
          for(value of values)(("then" in Object(is=("then" in Object(value))?value.then(call):call(value)))?(await is):(is))||(yield value);
        },
      })
      :
      (asyncIterator in values)?({
        [asyncIterator]:async function*(){
          var value,is;
          for await(value of values)("then" in Object(is=call(value))?(await is):is)||(yield value)
        },
      })
      :
      ({
        [asyncIterator]:async function*(){
          var value,is,iterable=await values;
          if (iterator in iterable) for(value of iterable)(("then" in Object(is=("then" in Object(value))?value.then(call):call(value)))?(await is):(is))||(yield value);
          else for await(value of iterable)("then" in Object(is=call(value))?(await is):is)||(yield value);
        },
      })
   )
);
export default reject;
export var then=(resolve)=>resolve(reject);
